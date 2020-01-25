---
title: Animated random background gradients
date: "2019-10-16"
tags: ["CSS", "JS", "Frontend", "Web"]
description: Adding a first simple animated background to this page has been surprisingly simple. Using a keyframe and CSS gradient, this was fairly easy to integrate.
---

I wanted to spice the page up a bit and might have gone wholly overboard with this.

My hope was that I could introduce some elevation cards, pretty much found everywhere as part of flat/material design. Sadly my white on white background was a bit boring.  
Indecisive as I am, I thought: "Why not try a gradient? That'd let me pick multiple colors I might want!", that turned into: "I've seen animated gradients... I should do that.", which then quickly became: "I don't know what colors work! I'll just randomize it... I guess?".

Like so often, that idea seemed a lot better in my head, than the actual result as it turned out. But first things first.

I wanted my gradient to be easy to use and be globally available. As I'm using React with Gatsby, I wanted the result to be a oneliner and have it as declarative as possible, and also with the chance to easily improve upon in the future.  
If you've thought to yourself: "That's pretty on the nose for a component!", then you're right.

My usage is simply the following line, added to my layout component:

```js
<Themer />
```

This currently is a component, that doesn't take any props (including children) and also doesnt render anything out.

Due to the fact that the `ReactDOM.render()` from `react-dom` here in use by the Gatsby, doesn't attach to the `<html>` root tag and also probably shouldn't, I wanted to break out of the attached context and attach the gradient style to the DOM outside of my React context.

On the one hand, that's a pretty bad idea, since it's not managed from React and I'm basically setting stuff outside my scope, because I can. Doing so is in total disregard of what might already be there and who or what else uses that attribute. On the other hand, it also opens up another possibility: state persistence across renders, without having to muck with the Gatsby setup. So far I'm reshuffling the gradient on every rerender, but I might want to keep it across renders and since it's not part of the React render, that also means it's not prone to flickering during.

Let's look at the code. The Themer component itself is pretty small too. While the original code was pretty concise, this is way more readable.

As we're not really going to render anything new directly using this component, but only modify existing DOM, this component doesn't need React per se. Here we're using the `useEffect` hook so that we can run the update function on rerenders.  
If we are going to use hooks, context or JSX for example, we need to import React. Reacts functional components are by definition just plain functions, if we wanted to schedule a background resizing differently or didn't care about the background size, we could do without the import.  
Themer runs, modifies and returns `null` for React to render - nothing.  
The query and modification of the :root style is wrapped in a conditional, so that the code doesn't run during Gatsby compile-time. If it wasn't it would throw an undefined.

```js
import React from 'react'

const Themer = () => {
  const gradientRotation = Math.floor(360 * Math.random())
  const randomColor = () => '#' + (Math.floor(0xffffff * Math.random())).toString(16).padStart(6, '0')
  const randomGradientLength = Math.max(Math.ceil(5 * Math.random()), 2)
  const gradientColors = Array.from({length: randomGradientLength}, randomColor)

  const update = () => {
    const root = window.document.querySelector(':root')

    const scaledMaxDimension = Math.max(root.offsetHeight, root.offsetWidth) * 2
    const gradient = `linear-gradient(${gradientRotation}deg,${gradientColors}) 0 0 / ${maxDimension}px ${maxDimension}px`

    root.style['background'] = gradient
  }

  React.useEffect(update)

  return null
}

export default Themer
```

First the `linear-gradient` takes a rotation value. We could've put any deg value, but decided to get a random integer between zero and 360, appending deg. The rest of the arguments passed to the gradient are the gradient colors.

The part that tripped me up was my #RGB-value creating `randomColor()` function, which at first didn't have the zero-padding of the generated String.  
If the random value was too low the #RGB-value was of invalid length. It didn't happen too often, but of course still more than enough, leaving the background white. The string (excluding the #) is allowed to be either three or six hex-characters of `[0-9a-f]` long, but could be anywhere between one or six without the padding.  
Thinking about #RGB as one long hex-value, creating the hex is easier calculated, than looping through the allowed alphabet and concatenating the characters to a string. We create a decimal from zero to 0xffffff which corresponds to 16777215, floor it to an integer, then convert it to a base 16 string and zero-pad if it's too short, then finally concat it with # to get a valid #RGB-value.

The animation isn't too interesting, but luckily a moving gradient can be done in pure CSS. The gradient itself might not be animated, but we're setting a background larger than the viewport and move the background-position. In this case we've made the background a square with the sides as long as the largest px-value of rendered content.  
`background` is shorthand for multiple background properties. After the background-color definition of linear-gradient there is a background-position and then delimited by / the background-size, written as `0 0 / ${maxDimension}px ${maxDimension}px`.

What is left is creating the keyframes and attaching them using CSS.

```css
:root {
  animation: animatedBackgroundGradient 30s ease alternate infinite;
}

@keyframes animatedBackgroundGradient {
	0% {
		background-position: 0% 0%;
	}
	25% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 0%;
	}
	75% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 0%;
	}
}
```

All in all this results in some pretty, some very unnoticable, but also some pretty ugly color combinations. It's a hit or miss.  
To improve on this, there's a lot of thinking about actual color theory, color representation and then animation left to do. The hard cutoffs need to go, same as weird color combinations and generally picking some muddy colors. For now it just runs.  
Sadly this also means _"it just runs"_. You can't turn it off and you can't guarantee, that it doesn't bug people out.

Since this is my first real blog post, it'll do for now and I'll get back to it later. Once I change the setup, I'll reference the hash of the git repo here. I might also add some media.

