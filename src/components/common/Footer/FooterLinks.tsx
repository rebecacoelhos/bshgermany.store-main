import { useState } from 'react'
import { List as UIList } from '@faststore/ui'

import Link from 'src/components/ui/Link'
import Accordion, { AccordionItem } from 'src/components/ui/Accordion'

import styles from './footer.module.scss'

const links = [
  {
    title: 'Kontakt',
    items: [
      {
        href: '/',
        name: 'Ausgezeichneter Service von Bosch  vor und nach dem Kauf.',
      },
      {
        href: '/',
        name: 'Mo-Fr 07:00-22:00 Uhr & Sa-So 08:00-18:00 Uhr',
      },
      {
        href: '/',
        name: 'Großgeräte:',
      },
      {
        href: '/',
        link: '📞 +49 89 69 339 339',
      },
      {
        href: '/',
        link: '✉  Bosch-Infoteam@bshg.com',
      },
      {
        href: '/',
        name: 'Kleingeräte:',
      },
      {
        href: '/',
        link: '📞 +49 911 70 440 040',
      },
      {
        href: '/',
        link: '✉  kleingeraete@bshg.com',
      },
      {
        href: '/',
        link: ' Setze dich mit uns in Verbindung >'
      },
    ],
  },
  {
    title: 'Hilfe ist unterwegs',
    items: [
      {
        href: '/',
        name: 'Vereinbare deinen Wunschtermin.',
      },
      {
        href: '/',
        link: ' Online einen Kundendiensttermin vereinbaren >'
      },
    ],
  },
  {
    title: 'Bosch Hausgeräte Service',
    items: [
      {
        href: '/',
        name: 'Ausgezeichneter Service - vor und nach dem Kauf.',
      },
      {
        href: '/',
        link: 'Mehr erfahren >',
      },
    ],
  },
  {
    title: 'Online Shop',
    items: [
      {
        href: '/',
        name: 'Bosch Hausgeräte, passendes Zubehör, wirksame Pflegemittel und original Ersatzteile findest du hier in unserem Bosch Online Shop.',
      },
      {
        href: '/',
        link: 'Zum Onlineshop >',
      }
    ],
  },
]

type LinkItem = {
  href: string
  name?: string
  link?: string
}

interface LinksListProps {
  items: LinkItem[]
}

function LinksList({ items }: LinksListProps) {
  return (
    <UIList>
      {items.map((item) => (
        <>
          <li key={item.name}>
            <p data-fs-footer-p>
              {item.name}
            </p>
          </li>
          <li>
            <Link data-fs-footer-link variant="footer" href={item.href}>
                {item.link}
            </Link>
          </li>
        </>
      ))}
    </UIList>
  )
}

function FooterLinks() {
  const [indicesExpanded, setIndicesExpanded] = useState<Set<number>>(
    new Set([])
  )

  const onChange = (index: number) => {
    if (indicesExpanded.has(index)) {
      indicesExpanded.delete(index)
      setIndicesExpanded(new Set(indicesExpanded))
    } else {
      setIndicesExpanded(new Set(indicesExpanded.add(index)))
    }
  }

  return (
    <section className={styles.fsFooter} data-fs-footer-links>
      <div className="display-mobile">
        <Accordion expandedIndices={indicesExpanded} onChange={onChange}>
          {links.map((section, index) => (
            <AccordionItem
              key={section.title}
              isExpanded={indicesExpanded.has(index)}
              buttonLabel={section.title}
            >
              <LinksList items={section.items} />
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="hidden-mobile">
        <nav data-fs-footer-links-columns>
          {links.map((section) => (
            <div key={section.title}>
              <p data-fs-footer-title>{section.title}</p>
              <LinksList items={section.items} />
            </div>
          ))}
        </nav>
      </div>
    </section>
  )
}

export default FooterLinks
