import React, { Fragment } from "react"

import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

const work = [
  {
    "date": {
      "from": { "day": 1, "month": 8, "year": 2018 },
      "to": null
    },
    "place": "Freelance",
    "position": "IT Consultant",
    "description": null
  },
  {
    "date": {
      "from": { "day": 1, "month": 10, "year": 2018 },
      "to": { "day": 31, "month": 12, "year": 2019 }
    },
    "place": "Syngenio AG",
    "position": "IT Consultant",
    "description": null
  },
  {
    "date": {
      "from": { "day": 1, "month": 3, "year": 2017 },
      "to": { "day": 1, "month": 10, "year": 2018 }
    },
    "place": "Syngenio AG",
    "position": "Junior IT Consultant",
    "description": null
  },
  {
    "date": {
      "from": { "day": 1, "month": 10, "year": 2016 },
      "to": { "day": 28, "month": 2, "year": 2017 }
    },
    "place": "Hochschule Bonn-Rhein-Sieg",
    "position": "Studentische Hilfskraft",
    "description": "Softwareentwicklung"
  },
  {
    "date": {
      "from": { "day": 1, "month": 4, "year": 2015 },
      "to": { "day": 30, "month": 9, "year": 2016 }
    },
    "place": "Hochschule Bonn-Rhein-Sieg",
    "position": "Studentische Hilfskraft",
    "description": "Softwareentwicklung, Unterstützung der Lehre"
  },
  {
    "date": {
      "from": { "day": 1, "month": 2, "year": 2013 },
      "to": { "day": 31, "month": 3, "year": 2015 }
    },
    "place": "Hochschule Bonn-Rhein-Sieg",
    "position": "Studentische Hilfskraft",
    "description": "First-/Second-Level-Support"
  },
  {
    "date": {
      "from": { "day": 1, "month": 9, "year": 2012 },
      "to": { "day": 31, "month": 1, "year": 2013 }
    },
    "place": "Hochschul- und Kreisbibliothek Bonn-Rhein-Sieg",
    "position": "Studentische Hilfskraft",
    "description": null
  },
  {
    "date": {
      "from": { "day": 1, "month": 8, "year": 2010 },
      "to": { "day": 31, "month": 12, "year": 2011 }
    },
    "place": "interschutz Nord GmbH",
    "position": "Teilzeit",
    "description": null
  }
]
const projects = [
  {
    "date": {
      "from": { "day": 1, "month": 4, "year": 2020 },
      "to": null
    },
    "place": "WDR mediagroup GmbH",
    "description": "Entwicklung und Weiterentwicklung von neuen und bestehenden Sprachassistenzsystemen des WDR.\nDie Entwicklung bezog sich zum Großteil auf bereitzustellende Fulfillment-Endpoints für die jeweiligen Systeme, als auch Abbildung der Interaktionsmodelle auf den jeweiligen nativen Plattformen. Die Endpoints wurden als Node.js Serverless-Komponenten auf AWS Lambda deployed.\nBesonderer Fokus lag des Weiteren auf der Verbesserung und Modernisierung der Entwicklungsumgebung und der Auslieferungsprozesse, welche durch neues Testtooling und automatisierte CI/CD-Pipelines umgesetzt wurden.",
    "tasks": [
      "Erstellen von CI/CD-Pipelines",
      "Verbesserung der Builds",
      "Verbesserung der Testinfrastruktur",
      "Umsetzung von Alexa Skills und Google Actions"
    ]
  },
  {
    "date": {
      "from": { "day": 15, "month": 8, "year": 2019 },
      "to": { "day": 31, "month": 12, "year": 2019 }
    },
    "place": "Internes Coaching",
    "description": "Coaching für Junior IT Consultants, sowie Verbesserung des Onboardings und verstärkter Aufbau technischer Grundlagen. Dabei wurde ein stärkerer Fokus auf den Einsatz aktueller Technologien gesetzt und gefördert.\nNeben Grundlagen wurden auch Best Practices, sowie Clean Code, Test Driven Development und Behaviour Driven Development, DevOps, API-Design, Architektur von Microservices, Umgang mit Legacy Code oder Fremdsystemen, und agilen Methodik vermittelt.\nDurchgeführt wurde dies während der Projektarbeit, bei Hackathons, Meetups und Schulungen.",
    "tasks": [
      "Agiles und technisches Coaching",
      "Code Review",
      "Pair Programming",
      "Organisation und Durchführung von internen Hackathons, Meetups und Schulungen",
      "Teilnahme an Hackathons"
    ]
  },
  {
    "date": {
      "from": { "day": 1, "month": 10, "year": 2018 },
      "to": { "day": 31, "month": 9, "year": 2019 }
    },
    "place": "Enterprise Integration",
    "description": "Architekturkonzeption und Entwicklung eines Enterprise Integration Frameworks und zugehöriger Plattform für ein Telekommunikationsunternehmen auf Basis von Kubernetes bzw. OpenShift mit ServiceMesh und Integration an bestehende Enterprisestrukturen.",
    "tasks": [
      "Architekturkonzeption nach offenen Standards mit Ausblick auf Multicluster und Multicloud",
      "Entwicklung eines Go-Kubernetes-Operators",
      "Vermittlung agiler Methodik",
      "Vermittlung DevOps-Praktiken"
    ]
  },
  {
    "date": {
      "from": { "day": 1, "month": 10, "year": 2018 },
      "to": { "day": 31, "month": 1, "year": 2019 }
    },
    "place": "Erweiterung des Preisanpassungstools",
    "description": "Das Tarifverwaltungs- und Preisanpassungstool für Energielieferanten wurde in diesem Projekt um die Möglichkeit zur Umbasierung tariflich genutzter Indizes erweitert und zu dessen Zweck optional an Destatis GENESIS angebunden.\nSoftwareauslieferungen wurden für schnelleres Feedback und Iteration automatisiert durchgeführt.",
    "tasks": [
      "Entwicklung in React-Frontend und Java-Backend",
      "Anbindung der SOAP-GENESIS-Schnittstelle",
      "Vermittlung agiler Methodik",
      "Vermittlung DevOps-Praktiken"
    ]
  },
  {
    "date": {
      "from": { "day": 1, "month": 9, "year": 2018 },
      "to": { "day": 14, "month": 10, "year": 2018 }
    },
    "place": "IoT Show-Case",
    "description": "Entwurf, Bau und Betrieb eines Messe-Show-Case zur Demonstration des Zusammenspiels von IoT, Webtechnologien und Blockchain zur Digitalisierung zukünftig automatischer Bezahlverfahren der Automobilbranche.",
    "tasks": [
      "Entwurf und Herstellung des Hardwaresetup",
      "Entwicklung des Python-Clients auf dem Modellfahrzeugs"
    ]
  },
  {
    "date": {
      "from": { "day": 1, "month": 9, "year": 2018 },
      "to": { "day": 21, "month": 9, "year": 2018 }
    },
    "place": "Implementierung eines HBCI-Clients",
    "description": "Entwicklung eines HBCI-Clients in JavaScript um direkt vom Endkundengerät die Bankenschnittstelle anzuprechen. Diese Entwicklung beseitigt die Notwendigkeit eines zusätzlichen Backends, welches HBCI zu REST übersetzte.\nKontoinformationen wurden auf der Kommunikationsstrecke somit nur vom Kundengerät und der Bank selbst gelesen. Dies war ein Gewinn zur Datenminimierung und beschleunigte die Kommunikation.",
    "tasks": [
      "Entwurf und Entwicklung des JavaScript-Clients",
      "Setup für Projekt- und Testintegration",
      "Mocks des Clients und der HBCI-Schnittstelle"
    ]
  },
  {
    "date": {
      "from": { "day": 1, "month": 5, "year": 2018 },
      "to": { "day": 1, "month": 9, "year": 2018 }
    },
    "place": "Entwicklung eines Preisanpassungstools",
    "description": "Entwickelt wurde ein Preisanpassungstool für Geschäftskundenverträge von Energielieferanten.\nIm Tool können Vertragsdaten inklusive Preisformeln, genutzten Indizes und entsprechende Abrechnungen der jeweiligen Preistypen revisionssicher verwaltet werden.\nSoftwareauslieferungen wurden für schnelleres Feedback und Iteration automatisiert durchgeführt.",
    "tasks": [
      "Entwicklung in React-Frontend und Java-Backend",
      "Entwurf des Datenbankschemas",
      "Anlegen von CI/CD-Pipelines",
      "Vermittlung agiler Methodik",
      "Vermittlung DevOps-Praktiken"
    ]
  },
  {
    "date": {
      "from": { "day": 1, "month": 10, "year": 2017 },
      "to": { "day": 31, "month": 5, "year": 2018 }
    },
    "place": "Entwicklung eines Online-Banking-Frontends",
    "description": "Neuentwicklung einer Online-Banking-Lösung für eine Privatbank, basierend auf der Abaxx Plattform. Im Projekt wurden im Backend zur Anpassung der Plattform, Anbindung des Authentifizerungs- und Autorisierungssystems sowie des Kernbankensystems vorgenommen.\nDas Frontend wurde in enger Abstimmung mit dem Kunden entworfen und entwickelt.",
    "tasks": [
      "Entwicklung in Java",
      "SOAP-Anbindung und Konfiguration von Authentifizierung- und Authorisierungssystem",
      "SOAP-Anbindung Kernbankensystem",
      "REST-Anbindung Dokumentenverwaltung",
      "Vermittlung agiler Methodik",
      "Livecoding Pair Design"
    ]
  },
  {
    "date": {
      "from": { "day": 1, "month": 5, "year": 2017 },
      "to": { "day": 1, "month": 6, "year": 2017 }
    },
    "place": "Mobile Banking App (Innovationlab)",
    "description": "Im Rahmen des Projektes wurde in Kooperation einer Bank, Visa Europa und uns eine Banking-App um Kreditkartenfunktionalitäten erweitert.\nDies geschah in Vorbereitung auf das Release des Visa Consumer Transaction Controls.",
    "tasks": [
      "Teilname an der Definition der Produktvision",
      "Architekturkonzeption und -beschreibung der Infrastruktur und dazugehöriger Kommunikation",
      "Entwicklung einer Hybriden App als React-SPA in einem Cordova Container",
      "Anbindung der Visa Consumer Transaction Control",
      "Vermittlung agiler Entwicklungsmethoden"
    ]
  },
  {
    "date": {
      "from": { "day": 1, "month": 3, "year": 2017 },
      "to": { "day": 1, "month": 10, "year": 2017 }
    },
    "place": "Mobile Banking App",
    "description": "Entwicklung einer modularen Banking-App.\nDie App soll als Teil einer Product-Suite für Banken dem Banken-Endkunden die Möglichkeit bieten mobil und jederzeit über seine finanzielle Lage informiert zu bleiben.\nFür die Bank als Kunden steht hierbei vorallem die Modularität bei der Auswahl gewünschter Featuresets im Vordergrund.",
    "tasks": [
      "Entwicklung einer Hybriden App als React-SPA in einem Cordova Container",
      "Testen der Komponenten und der Redux-Stores",
      "Entwicklung eines Java-REST-Adapters für HBCI/FinTS",
      "Entwicklung an einem Java-HBCI/FinTS-Mock-Server zum Integrationstesten des Backends"
    ]
  },
  {
    "date": {
      "from": { "day": 1, "month": 10, "year": 2016 },
      "to": { "day": 1, "month": 2, "year": 2017 }
    },
    "place": "Implementierung einer prototypischen IDM-Lösung",
    "description": "Aufgrund historisch gewachsener, disjunkter, teils eigenentwickelter Systeme, entschied man sich dazu eine IDM-Lösung anzustreben. Da im Normalfall die Systeme auf dem IDM aufbauen sollten, diese Änderung aber in seiner Größe im laufenden Betrieb allerdings nicht Umsetzbar war, sollte zunächst ein neues System Daten zentralisiert halten und synchronisieren.",
    "tasks": [
      "Anforderungsanalyse",
      "Konzeption der Systemarchitektur",
      "Entwurf des Datenbankschemas",
      "Anbindung an bestehende Produktivsysteme in NodeJS-Backend"
    ]
  },
  {
    "date": {
      "from": { "day": 1, "month": 4, "year": 2015 },
      "to": { "day": 1, "month": 9, "year": 2016 }
    },
    "place": "Entwicklung eines Testframeworks",
    "description": "Für eine ergänzende Lehrplattform für Programmiereinsteiger in Java wurde eine den Nutzerkenntnissen entsprechende Fehlerausgabe in einem bereits vorhandenen System benötigt.\nDa sich JUnit für diese Aufgabe als ungeeignet erwies entwickelte ich eine auf die Lehrveranstaltung zugeschnittene Alternative, die seitdem produktiv in Verwendung ist.",
    "tasks": [
      "Anforderungsanalyse",
      "Implementierung eines Test Runners für Java",
      "Implementierung eines Frameworks zur Generierung von Tests und Beispielen der Fehlernachstellung",
      "Betreuung der Infrastruktur und des Frameworks"
    ]
  }
]
const skills = [
  "JavaScript", "TypeScript", "React", "React Native", "Java", "Python", "Elixir", "Go", "Kubernetes", "AWS", "Azure", "GCP", "Professional Scrum Master™️ level I (PSM I)", "DevOps", "Serverless", "Machine Learning", "Usability / Accessibility"
]

const CV = ({
  data: {
    qr: {
      childImageSharp: {
        fixed,
      },
    },
    site: {
      siteMetadata: {
        author,
        social: {
          mail,
          keybase,
          github,
          twitter,
          linkedin,
          xing,
        },
      },
    },
  },
}) =>
  <Layout
    mainClassName="cv"
    title={
      <>
        <h1>Lebenslauf</h1>
        <h2>{author}</h2>
        <Image fixed={fixed} className="qrlink" />
      </>
    }
  >
    <section className="card">
      <h3>Kontakt</h3>
      <div>
        <div>
        <h4>E-Mail</h4>
        <p><a className="external-link" href={`mailto:${mail}`}>{mail}</a></p>
        <h4>Keybase</h4>
        <p><a className="external-link" href={keybase}>{keybase}</a></p>
        <h4>GitHub</h4>
        <p><a className="external-link" href={github}>{github}</a></p>
        <h4>Twitter</h4>
        <p><a className="external-link" href={twitter}>{twitter}</a></p>
        <h4>LinkedIn</h4>
        <p><a className="external-link" href={linkedin}>{linkedin}</a></p>
        <h4>Xing</h4>
        <p><a className="external-link" href={xing}>{xing}</a></p>
      </div></div>
    </section>
    <section className="card">
      <h3>Berufliche Erfahrung</h3>
      <div>
        {
          work.map(({ place, position, description, date }, index) =>
            <Fragment key={place + position + description + index}>
              <div>
                <h4>
                  {
                    `${String(date.from.month).padStart(2, "0")}.${date.from.year}`} - {date.to ? `${String(date.to.month).padStart(2, "0")}.${date.to.year}` : "Heute"
                  }
                </h4>
                <p>
                  {place},<br />
                  {position}
                  {description && <>,<br />{description}</>}
                </p>
              </div>
              {
                index !== work.length - 1 && <hr />
              }
            </Fragment>
          )
        }
      </div>
    </section>
    <section className="card">
      <h3>Skills</h3>
      <div>
        <p>
          {
            skills.join(", ")
          }
        </p>
      </div>
    </section>
    <section className="card">
      <h3>Projekte</h3>
      <div>
        {
          projects.map(({ place, date, description, tasks }, index) =>
            <Fragment key={place + index}>
              <div>
                <h4>
                  {
                    `${String(date.from.month).padStart(2, "0")}.${date.from.year}`} - {date.to ? `${String(date.to.month).padStart(2, "0")}.${date.to.year}` : "Heute"
                  }
                </h4>
                <div>
                  {
                    description.split("\n").map((paragraph, index) => <p key={place + index + "p"}>{paragraph}</p>)
                  }
                  <ul>
                    {
                      tasks && tasks.map((task, index) => <li key={place + index + "li"}>{task}</li>)
                    }
                  </ul>
                </div>
              </div>
              {
                index !== projects.length - 1 && <hr />
              }
            </Fragment>
          )
        }
      </div>
    </section>
  </Layout> 

export const pageQuery = graphql`
  query {
    qr: file(absolutePath: { regex: "/cv-link.png/" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          keybase
          mail
          xing
          linkedin 
          github
        }
      }
    }
  }
`

export default CV
