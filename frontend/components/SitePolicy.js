import React from 'react';
import OverlayWindow from './OverlayWindow';

export default function SitePolicy(props) {

    return (
        <OverlayWindow
            header="Regulamin strony"
            hide={props.hide}
            show={props.show}
        >
            <div className="help-window">
                <ol>
                    <li className="mb-5">
                        <p>
                            1. Niniejszy regulamin określa zasady korzystania z serwisu internetowego
                            dostępnego pod adresem dyzurymedyczne.pl.
                            </p>
                            <p>
                            2. Ilekroć w niniejszym regulaminie mowa o:<br/>
                            - regulaminie - należy przez to rozumieć niniejszy regulamin;<br/>
                            - administratorze - należy przez to rozumieć Marcina Bogdanowicza;<br/>
                            - serwisie - należy przez to rozumieć stronę internetową zamieszczoną
                            pod adresem dyzurymedyczne.pl;<br/>
                            - programie - należy przez to rozumieć serwis;<br/>
                            - użytkowniku - należy przez to rozumieć każdą osobę, która korzysta z serwisu.
                        </p>
                    </li>
                    <li  className="mb-5">
                        <p>
                            1. Przy korzystaniu z serwisu, użytkownik zobowiązuje się do przestrzegania
                            regulaminu i akceptuje wynikające z niego zasady korzystania i udostępniania serwisu.
                            </p>
                            <p>
                            2. Użytkownik, który nie wyraża zgody na którykolwiek z zapisów regulaminu, nie może 
                            korzystać z serwisu.
                        </p>
                    </li>
                    <li  className="mb-5">
                        <p>
                            1. Serwis został stworzony w celu usprawnienia procesu układania i poprawy 
                            jakości grafików dyżurów lekarskich na oddziałach szpitalnych w Polsce.</p>
                            <p>
                            2. Serwis może być wykorzystywany wyłącznie do celu opisanego w ust. 1 oraz
                            do celów edukacyjnych lub poglądowych.<br/>
                        </p>
                    </li>
                    <li className="mb-5">
                        <p>
                            1. Administrator dokłada wszelkich starań dla zapewnienia, by serwis pomagał w ułożeniu
                            grafików możliwie wysokiej jakości, w tym:<br/>
                            - by żaden lekarz nie pracował więcej niż 24 godziny bez dobowego odpoczynku;<br/>
                            - by dyżury lekarzy były rozłożone w miesiącu w możliwie największych odstępach;<br/>
                            - by dyżury stanowiły dla lekarzy możliwie najmniejsze obciążenie według przyjętych kryteriów.
                            </p>
                            <p>
                            2. Użytkownik przyjmuje do wiadomości, że serwis wspomagając układanie dyżurów bierze pod uwagę
                            wyłącznie wprowadzone do niego dane i nie może ocenić wszystkich rzeczywistych sytuacji, które
                            mogłyby negatywnie wpłynąć na jakość pracy lub usług świadczonych przez dyżurujących lekarzy.
                            </p>
                            <p>
                            3. Administrator nie ponosi odpowiedzialności za negatywne skutki, które mogłyby
                            wyniknąć z korzystania z serwisu lub wykorzystywania ułożonych przy pomocy serwisu
                            grafików na potrzeby działalności leczniczej. W szczególności administrator nie ponosi
                            odpowiedzialności za:<br/>
                            - błędy medyczne popełnione przez lekarzy dyżurujących na podstawie ułożonego przez
                            program grafiku;<br/>
                            - błędy medyczne będące wynikiem błędu organizacyjnego, polegającego na obsadzeniu dyżuru 
                            medycznego niewłaściwą obsadą;<br/>
                            - jakikolwiek uszczerbek, którego mogliby doznać lekarze dyżurujący na podstawie grafiku
                            ułożonego przez program, w wyniku zbyt dyżego obciążenia lub innej okoliczności związanej z
                            obsadzeniem w grafiku.
                        </p>
                    </li>
                    <li className="mb-5">
                        <p>
                            1. Użytkownik jest zobowiązany do niewprowadzania do bazy danych serwisu żadnych informacji,
                            które mogłyby stanowić dane osobowe lekarzy zatrudnionych w istniejącej placówce medycznej.
                            </p>
                            <p>
                            2. W szczególności użytkownik:<br/>
                            - poda nazwę oddziału, dla którego będzie układał grafik z pomocą serwisu, wyłacznie w zakresie
                            identyfikującym dziedzinę medycyny, w której specjalizuje się oddział (np. "Kardiologia", "Ginekologia", itd.);<br/>
                            - nie jest uprawniony do podania w nazwie oddziału jakichkolwiek danych pozwalających na identyfikację podmiotu leczniczego
                            w którego strukturze organizacyjnej wyodrębniony jest oddział;<br/>
                            - nie jest uprawniony do wprowadzenia do bazy danych serwisu rzeczywistych imion lub nazwisk lekarzy
                            pracujących na oddziale; zamiast tego użytkownik zobowiązany jest do podania pseudonimów lub zmienionych
                            (wymyślonych) danych.
                            </p>
                            <p>
                            3. Użytkownik ponosi całkowitą odpowiedzialność za wprowadzenie do bazy danych serwisu informacji pozwalających
                            na identyfikację rzeczywistych osób na podstawie tych danych, w szczególności za podanie nazwy oddziału
                            ujawniającego dane podmiotu leczniczego lub pozwalającej na identyfikację lekarzy na podstawie użytych 
                            imion lub pseudonimów. W przypadku skierowania wobec administratora jakichkolwiek roszczeń związanych z 
                            wprowadzeniem przez użytkownika danych osobowych do bazy danych serwisu, użytkownik zwolnie administratora
                            z tych roszczeń, z wyłączeniem roszczenia o usunięcie danych.
                        </p>
                    </li>
                    <li className="mb-5">
                        <p>
                            1. Korzystanie z serwisu jest bezpłatne.<br/>
                            </p>
                            <p>
                            2. Administrator może wprowadzić opłaty za korzystanie z serwisu w każdym czasie.
                            </p>
                            <p>
                            3. W przypadku wprowadzenia opłat, użytkownicy, którzy nie zdecydują się na ich
                            uiszczanie, będą mieli dostęp do wcześniej ułożonych grafików i wprowadzonych danych.
                            </p>
                            <p>
                            4. Do czasu wprowadzenia opłat za korzystanie z serwisu, administrator oświadcza, że 
                            jego prowadzenie nie stanowi dla niego działalności gospodarczej ani zarobkowej.
                        </p>
                    </li>
                    <li className="mb-5">
                        <p>
                            Administrator jest uprawniony do zawieszenia lub usunięcia konta użytkownika naruszającego
                            zapisy regulaminu, po udzieleniu co najmniej tygodniowego terminu na usunięcie naruszeń, a 
                            w przypadku rażących naruszeń, które godzą w prawa osób trzecich - także bez udzielenia terminu.
                        </p>
                    </li>
                    <li className="mb-5">
                        <p>
                            Administrator może zlikwidować serwis w każdym czasie, bez podania przyczyny.
                        </p>
                    </li>
                    <li className="mb-5">
                        <p>
                            1. Regulamin wchodzi w życie z chwilą jego opublikowania na stronie dyzurymedyczne.pl.
                            </p>
                            <p>
                            2. Niniejszy regulamin może być zmieniony w każdym czasie, bez konieczności podania przyczyny.
                            </p>
                            <p>
                            3. W zakresie nieuregulowanym w niniejszym regulaminie, stosuje się przepisy powszechnie
                            obowiązującego prawa Rzeczpospolitej Polskiej.
                            </p>
                            <p>
                            4. Wszelkie spory wynikłe z korzystania z serwisu lub dotyczące niniejszego regulaminu, będzie rozstrzygał
                            sąd powszechny właściwy dla siedziby administratora.
                            </p>
                            <p>
                            5. Wszelką korespondencję związaną z korzystaniem z serwisu, administrator będzie kierował do
                            użytkownika na adres e-mail podany w trakcie rejestracji konta.
                        </p>
                    </li>
                </ol>
            </div>
        </OverlayWindow>
    )
}