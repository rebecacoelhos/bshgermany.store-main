import {
  List as UIList,
  PaymentMethods as UIPaymentMethods,
} from '@faststore/ui'

import IncentivesFooter from 'src/components/sections/Incentives/IncentivesFooter'
import Icon from 'src/components/ui/Icon'
import Link from 'src/components/ui/Link'
import { mark } from 'src/sdk/tests/mark'

import styles from './footer.module.scss'
import FooterLinks from './FooterLinks'
import Image from 'next/image'

import Rechung from "../../../images/rechnung.webp";
import Mastercard from "../../../images/mastercard.webp";
import Visa from "../../../images/visa.webp";
import Paypal from "../../../images/paypal.webp";
import Sepa from "../../../images/sepa.webp";
import Lazy from "../../../images/lazy.webp";
import Lazyloaded from "../../../images/lazyloaded.webp";


type FooterProps = {
  /**
   * Enables Incentives Section
   */
  sectionIncentives?: boolean
  /**
   * Enables Social Section
   */
  sectionSocial?: boolean
  /**
   * Enables Payment Methods Section
   */
  sectionPaymentMethods?: boolean
}

export function Footer({
  sectionIncentives = true,
  sectionSocial = true,
  sectionPaymentMethods = true,
}: FooterProps) {
  return (
    <footer
      data-fs-footer
      data-fs-footer-incentives={sectionIncentives}
      data-fs-footer-social={sectionSocial}
      data-fs-footer-payment-methods={sectionPaymentMethods}
      className={`${styles.fsFooter} layout__content-full`}
    >
      {sectionIncentives && <IncentivesFooter />}

     <div data-fs-footer-body>
      <div data-fs-footer-nav className="layout__content">
          <FooterLinks />
      </div>
     </div>

      <div data-fs-footer-note className="layout__content">
        <div data-fs-footer-classes className="text__legend">
        <a data-fs-footer-classes-title href=''>Service</a>
          <a href=''>Hilfe & Unterstützung</a>
          <a href=''>Reparaturservice</a>
          <a href="">Pflege & Schutz</a>
          <a href="">Kontakt & Info</a>
          <a href="">Jobs & Karriere</a>
          <a href=''>Garantien</a>
          <a href="">Energielabel</a>
          <a href="">Sicherheitshinweise</a>
          <a href="">Prospekte</a>
        </div>

        <div data-fs-footer-classes className="text__legend">
          <a data-fs-footer-classes-title href=''>Bosch erleben</a>
          <a href=''>Bosch Magazin</a>
          <a href=''>Unsere Testsieger</a>
          <a href="">Home Connect</a>
          <a href="">Auszeichnungen</a>
          <a href="">Objektgeschäft</a>
        </div>

        <div data-fs-footer-classes className="text__legend">
          <a data-fs-footer-classes-title href=''>Onlineshop</a>
          <a href=''>AGB & Widerrufsbelehrung</a>
          <a href="">Zahlungsmethoden</a>
          <a href="">Versandkosten</a>
          <a href="">Liefer- & Anschlussbedingungen</a>
          <a href="">Rücksendung</a>
          <a href="">Ersatzteilsuche</a>
          <a href=""></a>
        </div>
      </div>

      <div data-fs-footer-coolkit-payments>
        <div data-fs-footer-coolkit>
          <p data-fs-footer-coolkit-title>Nur Großgeräte & Cookit</p>
          <div>
            <Image src={Lazyloaded}/>
            <Image src={Lazy}/>
          </div>
        </div>

        <div data-fs-footer-payments>
        {sectionPaymentMethods && (
          <UIPaymentMethods data-fs-footer-payment-methods>
            <p data-fs-footer-payment-title>Sichere Zahlungsmethoden</p>
            <div data-fs-footer-method-payments>
              <Image src={Visa}/>
              <Image src={Mastercard}/>
              <Image src={Paypal}/>
              <Image src={Rechung}/>
              <Image src={Sepa}/>
            </div>
            <p data-fs-payments-footer>Übersicht aller Zahlungsmethoden mehr ℹ️</p>
          </UIPaymentMethods>
        )}
        </div>
      </div>

      {sectionSocial && (
        <section data-fs-footer-social>
            <UIList variant="unordered">
              <li>
                <Link
                  variant="footer"
                  href="https://www.facebook.com/"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon width="24px" height="24px" name="Facebook" />
                </Link>
              </li>
              <li>
                <Link
                  variant="footer"
                  href="https://www.youtube.com/"
                  title="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon width="24px" height="24px" name="Instagram" />
                </Link>
              </li>
              <li>
                <Link
                  variant="footer"
                  href="https://www.instagram.com/"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon width="24px" height="24px" name="Instagram" />
                </Link>
              </li>
              <li>
                <Link
                  variant="footer"
                  href="https://www.pinterest.com/"
                  title="Pinterest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon width="24px" height="24px" name="Pinterest" />
                </Link>
              </li>
            </UIList>
        </section>
      )} 

      <div>
        <div data-fs-footer-informations>
          <p>© Robert Bosch Hausgeräte GmbH</p>
          <a href="">Impressum/Informationen zum Datenschutz</a>
          <a href="">AGB & Widerrufsbelehrung</a>
          <a href="">Garantiebedingungen</a>
          <a href="">Presse-Center</a>
          <a href="">Newsletter</a>
          <a href="">Prospekte</a>
          <a href="">Produkt registrieren</a>
        </div>
        <div data-fs-footer-technik>
          <span>Technik fürs Leben</span>
        </div>
      </div>
    </footer>

    
  )
}

Footer.displayName = 'Footer'
export default mark(Footer)
