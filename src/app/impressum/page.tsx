import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export const metadata = { title: 'Impressum — D4M' };

export default function ImpressumPage() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-white pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose lg:prose-lg mx-auto bg-white/95 p-8 rounded-xl shadow-sm border border-gray-100">
            <h1>Impressum</h1>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="mt-0">Berufsbildende Schulen I Lüneburg</h2>
                <address className="not-italic">
                  Spillbrunnenweg 1<br />
                  21337 Lüneburg
                </address>
              </div>

              <div>
                <h3>Kontakt</h3>
                <p>
                  Telefon:{' '}
                  <a href="tel:+49413199220600" className="text-primary hover:underline">
                    04131 / 99 220 600
                  </a>
                  <br />
                  E‑Mail:{' '}
                  <a href="mailto:info@bbs1-lueneburg.de" className="text-primary hover:underline">
                    info@bbs1-lueneburg.de
                  </a>
                </p>
              </div>
            </div>

            <section>
              <h3>Vertretung</h3>
              <p>
                Oberstudiendirektor <strong>Heiko Lüdemann</strong>
              </p>
            </section>

            <section>
              <h3>Datenschutz</h3>
              <p>
                Sofern innerhalb dieser Homepage die Möglichkeit zur Eingabe persönlicher oder
                geschäftlicher Daten (E‑Mail‑Adressen, Namen, Anschriften) besteht, so erfolgt die
                Preisgabe dieser Daten seitens des Nutzers ausdrücklich auf freiwilliger Basis.
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
