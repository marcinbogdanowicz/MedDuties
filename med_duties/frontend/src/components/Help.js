import React from 'react';
import OverlayWindow from './OverlayWindow';

export default function Help(props) {

    return (
        <OverlayWindow
            header="Jak korzystać z aplikacji?"
            hide={props.hide}
            show={props.show}
        >
            <div className="help-window">
            <p>
                <strong>
                    Praca z aplikacją Dyżury Medyczne odzwierciedla naturalny tok 
                    działań towarzyszących układaniu dyżurów lekarskich. 
                    Potrzebny jest oddział, lekarze i ich preferencje oraz wybór miesiąca.
                    Po ustaleniu tych danych, program będzie gotowy
                    do ułożenia grafiku. By ułatwić pracę ordynatora, dodano
                    sekcję statystyk, pokazujących dotychczasowe
                    obciążenie lekarzy.<br/><br/>
                    Jeśli chcesz szybko zacząć pracę, po najechaniu na większość przycisków (lub znajdujące się
                    obok niebieskie znaki zapytania) zobaczysz zwięzłą informację o ich działaniu.
                </strong>
            </p>
            <h2 className="mt-4" id="spis-tresci">Spis treści</h2>
            <ol>
                <li><a href="#szybki-start">Szybki start</a></li>
                <li><a href="#tworzenie-profili-lekarzy">Tworzenie profili lekarzy</a></li>
                <li><a href="#tworzenie-grafiku">Tworzenie grafiku</a></li>
                <li>
                    <a href="#układanie-grafiku">Układanie grafiku</a><br/>
                    <ul>
                        <li><a href="#interfejs">Interfejs</a></li>
                        <li><a href="#dodawanie-i-usuwanie-lekarzy">Dodawanie i usuwanie lekarzy</a></li>
                        <li><a href="#preferencje-lekarzy">Preferencje lekarzy</a></li>
                        <li><a href="#ustawienia-grafiku">Ustawienia grafiku</a></li>
                        <li><a href="#okno-grafiku">Okno grafiku</a></li>
                        <li><a href="#sterowanie-aplikacja">Sterowanie aplikacją (dolne przyciski)</a></li>
                    </ul>
                </li>
                <li><a href="#statystyki">Statystyki</a></li>
            </ol>

            <h2 className="mt-4" id="szybki-start">Szybki start<a href="#spis-tresci">[spis treści]</a></h2>
            <ol>
                <li>
                    <p>
                        Zacznij od utworzenia profili lekarzy w zakładce <span className="element-name">Lekarze</span>. Utwórz wszystkich, z którymi możesz chcieć współpracować.
                    </p>
                </li>
                <li>
                    <p>
                        W zakładce <span className="element-name">Dyżury</span> utwórz nowy grafik klikając <span className="element-name">+</span>. Następnie wejdź w grafik przyciskiem <span className="element-name">Otwórz</span> (po lewej).
                    </p>
                </li>
                <li>
                    <p>
                        Po lewej stronie dodaj lekarzy w zakładce <span className="element-name">Dodaj lekarza</span>.
                    </p>
                </li>
                <li>
                    <p>
                        Po lewej stronie klikaj imiona lekarzy, by wprowadzić ich <b>preferencje</b>. Pamiętaj, żeby <b>zapisać</b> je u każdego lekarza.
                    </p>
                </li>
                <li>
                    <p>
                        Lekarz nie dostanie więcej niż podana <b>maksymalna liczba dyżurów</b>. W zakładce <span className="element-name">Ustawienia grafiku</span> sprawdź sumę
                        deklarowanych dyżurów. Jeśli wynosi tyle, ile jest dyżurów w miesiącu, lekarze dostaną dokładnie tyle dyżurów, ile zadeklarują.
                        Możesz użyć przycisku <span className="element-name">Dopasuj</span> w ustawieniach, by proporcjonalnie zwiększyć/zmniejszyć liczbę dyżurów deklarowaną przez lekarzy.
                    </p>
                </li>
                <li>
                    <p>
                        <b>W kalendarzu możesz wybrać preferencje dni: zastrzeżenia, dni, które lekarz obsadzi i dni tygodnia, w które może otrzymać dyżur</b>.
                        Kliknij na odpowiedni przycisk, a potem wybierz preferencje w kalendarzu - dni będą zaznaczane kolorem aktywnego przycisku. (Domyślnie wszystkie
                        dni tygodnia są już zaznaczone.)
                    </p>
                </li>
                <li>
                    <p>
                        Wybierz <b>pozycje</b>, na których lekarz dyżuruje. Program obsadzi go tylko na tych pozycjach.
                    </p>
                </li>
                <li>
                    <p>
                        Aby program zaproponował grafik, kliknij niebieski przycisk <span className="element-name">Ułóż dyżury</span>. Ewentualne błędy zobaczysz w logu (przycisk <span className="element-name">Pokaż log</span>).
                    </p>
                </li>
                <li>
                    <p>
                        Przejrzyj dyżury. Kliknij na obsadzonego lekarza, lub otwórz jego preferencje - ciemnoczerwono <b>podświetlą</b> się jego dyżury,
                        na szaro dyżury, których nie mógł obsadzić, a na czerwono te, które mógł, ale nie obsadził.
                    </p>
                </li>
                <li>
                    <p>
                        W ocenie jakości grafiku pomogą Ci <b>statystyki</b> - kliknij <span className="element-name">Pokaż statystyki</span>. Zwróć uwagę na różnicę między liczbą "napoczętych" weekendów,
                        a dyżurów weekendowych (program uznaje za weekendowe piątek, sobotę i niedzielę). Obciążenie to przyjęty wskaźnik odzwierciedlający obciążenie
                        lekarza jego wszystkimi dyżurami. 
                    </p>
                </li>
                <li>
                    <p>
                        <b>Spróbuj klikać <span className="element-name">Ułóż grafik</span> wiele razy, mając otwarte statystyki.</b> Każdy grafik będzie trochę inny. Szybko zauważysz, który bardziej Ci odpowiada. Poza innymi wartościami, zwróć uwagę
                        na sumę weekendów "napoczętych" łącznie przez wszystkich lekarzy, a także sumę obciążenia (wartości Razem) - im te parametry niższe, tym grafik korzystniej ułożony.
                    </p>
                </li>
                <li>
                    <p>
                        Program przechowuje <b>historię 6 ostatnich zmian w grafiku</b> (oraz bieżący stan). Możesz więc wrócić, jeżeli poprzedni grafik był lepszy.
                        Pamiętaj, że zmiana to zarówno ułożenie/usunięcie całego grafiku, jak i pojedyńczego dyżuru. Do przeglądania historii użyj strzałek <span className="element-name"><i className="bi bi-skip-backward-fill"></i></span> i <span className="element-name"><i className="bi bi-skip-forward-fill"></i></span>.
                    </p>
                </li>
                <li>
                    <p>
                        Pamiętaj, aby <b>zapisać grafik</b> na serwerze! W tym celu kliknij <span className="element-name">Zapisz</span>.
                    </p>
                </li>
                <li>
                    <p>
                        Przyciskiem <span className="element-name">Pobierz</span> możesz zapisać dyżury na swoim komputerze jako <b>arkusz kalkulacyjny Excel (.xlsx)</b>.
                    </p>
                </li>
                <li>
                    <p>
                        Aby układać, zmieniać i usuwać pojedyńcze dyżury, użyj przycisków <span className="element-name"><i className="bi bi-person-fill-add"></i></span> i <span className="element-name"><i className="bi bi-x-lg"></i></span>. Możesz ułożyć tylko kilka,
                        istotnych dla Ciebie dyżurów - gdy naciśniesz Ułóż grafik, <b>program zaproponuje pozostałe, nie zmieniając
                        dyżurów użytkownika</b>.
                    </p>
                </li>
                <li>
                    <p>
                        Przyciskiem <span className="element-name">Wyczyść</span> możesz <b>usunąć dyżury</b>. Program pozwoli Ci <b>wybrać</b>, czy chcesz usunąć tylko te ułożone
                        przez komputer, czy wszystkie, łącznie z dyżurami ułożonymi przez użytkownika.
                    </p>
                </li>
                <li>
                    <p>
                        W dziale <span className="element-name">Statystyki</span>, dostępnym z głównego lub bocznego menu, zobaczysz ile <b>przeciętnie miesięcznie</b> różnych dni tygodnia lub weekendów
                        obsadzają poszczególni lekarze, ile mają średnio dyżurów i jakie jest ich przeciętne obciążenie. Zobaczysz też w ilu grafikach obsadzony jest lekarz.
                    </p>
                </li>
            </ol>

            <h2 className="mt-4" id="tworzenie-profili-lekarzy">Tworzenie profili lekarzy<a href="#spis-tresci">[spis treści]</a></h2>
            <ol>
                <li>
                    <p>
                        Aby utworzyć profil lekarza, wejdź w zakładkę <span className="element-name">Lekarze</span> i
                        kliknij <span className="element-name">+</span>. Podaj dane lekarza i kliknij <span className="element-name">Wyślij</span>.
                        Po prawej stronie pojawi się wizytówka lekarza.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Utwórz wszystkich lekarzy</b>, z którymi będziesz współpracować.
                        Nie przejmuj się najbliższymi dyżurami - na poziomie grafiku
                        będziesz mógł wybrać, kto ma obsadzić dany miesiąc.
                    </p>
                </li>
                <li>
                    <p>
                        Klikając w wizytówkę lekarza, po lewej zobaczysz jego statystyki
                        oraz będziesz mógł usunąć lub edytować jego profil.
                    </p>
                </li>
                <li>
                    <p>
                        Profile lekarzy możesz dodawać, edytować i usuwać w każdym czasie.
                        Pamiętaj, że zmiany wpłyną na już ułożone grafiki (usunięty
                        lekarz zniknie z wszystkich grafików!).
                    </p>
                </li>
            </ol>

            <h2 className="mt-4" id="tworzenie-grafiku">Tworzenie grafiku<a href="#spis-tresci">[spis treści]</a></h2>
            <ol>
                <li>
                    <p>
                        Kliknij w zakładkę <span className="element-name">Dyżury</span> w menu bocznym <span className="element-name">☰</span> lub głównym.
                        Znajdziesz tam listę już utworzonych grafików, posortowaną datami.
                    </p>
                </li>
                <li>
                    <p>
                        Kliknij <span className="element-name">+</span>, by <b>dodać nowy grafik</b>. Po lewej wybierz rok 
                        i miesiąc. Jeżeli nazwa miesiąca zapisana jest szarą czcionką,
                        grafik na ten miesiąc już istnieje i nie można utworzyć go ponownie.
                    </p>
                </li>
                <li>
                    <p>
                        Po utworzeniu grafiku, zobaczysz jego szczegóły:
                        statystyki oraz przyciski <span className="element-name">Otwórz</span> i <span className="element-name">Usuń</span>.
                        Aby zobaczyć szczegóły innych grafików, klikaj ich wizytówki.
                    </p>
                </li>
                <li>
                    <p>
                        Aby <b>zobaczyć i edytować grafik</b>, kliknij <span className="element-name">Otwórz</span>.
                    </p>
                </li>
                <li>
                    <p>
                        Jeśli chcesz usunąć grafik, kliknij <span className="element-name">Usuń</span>.
                    </p>
                </li>
            </ol>

            <h2 className="mt-4 mb-3" id="układanie-grafiku">Układanie grafiku<a href="#spis-tresci">[spis treści]</a></h2>
            <h3 id="interfejs">Interfejs<a href="#spis-tresci">[spis treści]</a></h3>
            <ol>
                <li>
                    <p>
                        Ekran układania grafiku składa się z trzech części.
                    </p>
                </li>
                <li>
                    <p>
                        W kolumnie <b>po lewej</b> stronie znajdują się <b>ustawienia grafiku</b> i <b>dodawanie lekarzy</b>.
                        Pomiędzy nimi pojawią się <b>preferencje dodanych</b> lekarzy.
                    </p>
                </li>
                <li>
                    <p>
                        Po prawej stronie na dole znajdziesz <b>przyciski sterujące aplikacją</b>.
                    </p>
                </li>
                <li>
                    <p>
                        Po prawej stronie na górze więkoszć ekranu zajmuje <b>grafik</b>.
                    </p>
                </li>
            </ol>
            <h3 id="dodawanie-i-usuwanie-lekarzy">Dodawanie i usuwanie lekarzy<a href="#spis-tresci">[spis treści]</a></h3>
            <ol>
                <li>
                    <p>
                        <b>Zacznij od dodania lekarzy</b>. Kliknij <span className="element-name">Dodaj lekarza</span> - rozwinie się okno.
                        Wybierz <span className="element-name">Dodaj wszystkich</span>, albo po kolei wybieraj imiona lekarzy
                        i klikaj <span className="element-name">Dodaj</span>. Preferencje nowych lekarzy pojawią się 
                        powyżej okna dodawania.
                    </p>
                </li>
                <li>
                    <p>
                        Kiedy klikniejsz imię lekarza, wyświetlą się jego <b>preferencje</b>. Na samym
                        dole znajduje się przycisk <span className="element-name">Usuń z grafiku</span>.
                        Możesz nim usunąć lekarza z aktualnego grafiku.
                        Usunięty lekarz pojawi się w zakładce dodaj lekarza i może być
                        ponownie dodany.
                    </p>
                    <p>
                        <b>Uwaga</b>!<br/>
                        Preferencje usuniętego lekarza program będzie pamiętał jedynie podczas 
                        sesji, w czasie której lekarz został usunięty. <b>Jeżeli zamkniesz albo odświeżysz
                        stronę, preferencje zostaną utracone</b>. Jeżeli
                        jednak przywrócisz lekarza w tej samej sesji, zostanie przywrócony wraz
                        z preferencjami.
                    </p>
                    <p>
                        <b>Dyżury</b> usuniętego lekarza również <b>zostaną utracone wraz z końcem danej sesji</b>.
                        Jeżeli ponownie dodasz lekarza przed jej zakończeniem, dyżury tego lekarza
                        będą widoczne po cofnięciu historii o 1 lub więcej.
                    </p>
                </li>
            </ol>
            <h3 id="preferencje-lekarzy">Preferencje lekarzy<a href="#spis-tresci">[spis treści]</a></h3>
            <ol>
                <li>
                    <p>
                        Kiedy klikniejsz <b>imię lekarza</b>, wyświetlą się jego preferencje. Obejmują one:<br/>
                        - maksymalną liczbę dyżurów,<br/>
                        - zastrzeżenia (dni, w które nie chce dyżurować),<br/>
                        - preferowane dni (w te dni lekarz dostanie dyżur),<br/>
                        - preferowane dni tygodnia (w te dni lekarz może dostać dyżur),<br/>
                        - pozycje na których lekarz dyżuruje.
                    </p>
                </li>
                <li>
                    <p><b>Zapisywanie</b></p>
                    <p>
                        Aby zapisać preferencje lekarza, kliknij przycisk <span className="element-name">Zapisz ustawienia</span>. <b>Wyłącznie
                        zapisane ustawienia będą brane pod uwagę podczas układania dyżurów.</b> Ustawienia
                        są zapisywane na serwerze i będą dostępne po ponownym uruchomieniu
                        programu.
                    </p>
                    <p>
                        Zapisanie całego grafiku zielony przyciskiem <span className="element-name">Zapisz</span> w prawym dolnym menu
                        spowoduje zapisanie także preferencji lekarzy.
                    </p>
                </li>
                <li>
                    <p><b>Maksymalna liczba dyżurów</b></p>
                    <p>
                        Program gwarantuje, że lekarz nie dostanie więcej dyżurów. 
                        Będzie dążył do przyznania lekarzom dyżurów w liczbie proporcjonalnej 
                        do ich maksymalnej liczby dyżurów. <i>Przykładowo:</i> Franek
                         deklaruje maksymalnie 12 dyżurów, 
                        a Gosia 6 (proporcja 3:2). Łącznie do rozdania jest 9 dyżurów. 
                        Franek dostanie więc 6, a Gosia 3. Liczby mogą się nieznacznie wahać.<br/>
                        <b>Jeżeli lekarze łącznie zadeklarują dokładnie tyle dyżurów, 
                        ile jest w miesiącu, każdy dostanie tyle, ile zadeklarował.</b>
                    </p>
                </li>
                <li>
                    <p><b>Kalendarz</b></p>
                    <p>
                        Kalendarz służy do <b>wybierania zastrzeżeń, preferowanych dni miesiąca
                        i tygodnia</b>. Aby ustawić któreś z powyższych, kliknij na jeden z trzech
                        połączonych przycisków - wypełni się on kolorem. Następnie
                        klikaj w kalendarzu - zaznaczony dzień wypełni się tym samym kolorem.
                        Ponowne kliknięcie spowoduje odznaczenie dnia. W przypadku dni tygodnia
                        możesz kliknąć na nazwę dnia lub na konkretną datę w ten dzień tygodnia.
                        Zmiana będzie widoczna na nazwie dnia tygodnia, a dni miesiąca wypadające w ten
                        dzień będą poszarzone.
                    </p>
                    <p>
                        <b>Uwaga!</b><br/>
                        Program na bieżąco śledzi, ile maksymalnie dyżurów mógłby wziąć lekarz 
                        na podstawie jego preferencji. Przyjmuje dyżury co drugi dzień, pomijając dni
                        zastrzeżone, wykluczone dni tygodnia oraz dni przed i po preferowanym dniu. <b>Jeżeli
                        lekarz może wziąć mniej dyżurów niż deklaruje,
                        program automatycznie zmniejszy jego maksymalną liczbę dyżurów</b> i pojawi się komunikat. 
                        Podobnie, jeśli lekarz preferuje więcej dni miesiąca niż deklaruje dyżurów,
                        program odpowiednio <b>zwiększy</b> jego maksymalną liczbę dyżurów.
                    </p>
                </li>
                <li>
                    <p><b><span className="element-name">Zastrz.</span> - zastrzeżenia (czerwony)</b></p>
                    <p>
                        <b>Zastrzeżenia to dni, w które lekarz nie chce dyżurować.</b> Program gwarantuje,
                        że lekarz nie otrzyma dyżuru w ten dzień. Jeżeli zbyt wielu
                        lekarzy zastrzegnie ten sam dzień, program zasygnalizuje, że 
                        nie ma kto go obsadzić. Dodanie zastrzeżenia w preferowany dzień miesiąca
                        spowoduje anulowanie preferencji.
                    </p>
                </li>
                <li>
                    <p><b><span className="element-name">D. Mies.</span> - preferowane dni miesiąca (niebieski)</b></p>
                    <p>
                        <b>Program gwarantuje, że lekarz dostanie dyżur w ten dzień.</b> Jeżeli
                        dzień jest preferowany przez więcej lekarzy niż liczba dyżurantów, 
                        dyżury nie zostana ułożone i zostanie wyświetlony błąd.
                        Możesz to zweryfikować używając przycisku <span className="element-name">Sprawdź</span>. Dodanie preferencji
                        w zastrzeżony dzień spowoduje anulowanie zastrzeżenia.<br/>
                        <b>Możliwe jest preferowanie dnia miesiąca przypadającego na dzień tygodnia, 
                        w który się nie dyżuruje.</b>
                    </p>
                </li>
                <li>
                    <p><b><span className="element-name">D. Tyg.</span> - preferowane dni tygodnia (zielony)</b></p>
                    <p>
                        <b>Domyślnie wszystkie dni tygodnia są preferowane</b> i ich nazwy są zaznaczone
                        na zielono. Dyżury lekarza będą układane wyłącznie w jego preferowane
                        dni tygodnia. Wyjątkiem jest możliwość preferowania dnia miesiąca
                        przypadającego na dzień tygodnia, w który się nie dyżuruje.
                    </p>
                </li>
                <li>
                    <p><b>Pozycje dyżurowe</b></p>
                    <p>
                        Domyślnie lekarz może objąć dyżury na wszystkich pozycjach.
                        W czasie układania grafiku przypisanie go do danej pozycji 
                        odbywa się w zasadzie losowo. Lekarz otrzyma dyżury wyłącznie
                        na pozycji (pozycjach), które wybierze.
                    </p>
                </li>
                <li>
                    <p><b>Podświetlenie</b></p>
                    <p>
                        Otwarcie preferencji danego lekarza spowoduje zmianę podświetlenia
                        grafiku. Na ciemnoczerwono podświetlą się dyżury, które lekarz obsadza.
                        Na czerwono podświetlone będą dyżury (dni i pozycje), które
                        może obsadzić. Na szaro podświetlone będą dyżury niedostępne
                        z uwagi na preferencje lekarza. Zamknięcie preferencji albo
                        kliknięcie w dyżur lekarza wyłączy podświetlenie.
                    </p>
                    <p>
                        W następnym i poprzednim miesiącu dyżury lekarza podświetlą się na 
                        ciemnoszaro, dyżury niedostępne na jasnoszaro, pozostałe bez zmian (na szaro).
                    </p>
                </li>
            </ol>
            <h3 id="ustawienia-grafiku">Ustawienia grafiku<a href="#spis-tresci">[spis treści]</a></h3>
            <ol>
                <li>
                    <p>
                        Aktualnie ustawienia grafiku obejmują wyłącznie informację o łącznej
                        maksymalnej liczbie dyżurów deklarowanej przez wszystkich lekarzy i
                        liczbie dyżurów do obsadzenia (liczba dni razy liczba pozycji) oraz 
                        możliwość ich <b>dopasowania</b>.
                    </p>
                </li>
                <li>
                    <p>
                        Przycisk <span className="element-name">Dopasuj</span> <b>zmieni
                        maksymalną liczbę dyżurów deklarowaną przez poszczególnych lekarzy, aby ich suma
                        wynosiła dokładnie tyle, ile liczba dyżurów w miesiącu</b>.
                        Program zmniejszy lub zwiększy liczbę dyżurów akceptowanych przez poszczególnych lekarzy, 
                        dążąc do <b>zachowania dotychczasowej proporcji</b>. <i>Przykładowo:</i> Gosia deklaruje 12 dyżurów, Franek 6
                        i Basia 6 (razem 24). Tymczasem do obsadzenia jest 16 dyżurów. Po  
                        naciśnięciu <span className="element-name">Dopasuj</span> maksymalna liczba dyżurów Gosi spadnie do 8, 
                        a Franka i Basi do 4.
                    </p>
                    <p>
                        <b>Kiedy lekarze zadeklarują dokładnie tyle dyżurów, ile jest do obsadzenia, program gwarantuje, że każdy lekarz
                        otrzyma dokładnie deklarowaną liczbę dyżurów.</b> Daje to użytkownikowi kontrolę
                        nad przyznawaną lekarzom liczbą dyżurów. Warto więc korzystać z 
                        przycisku <span className="element-name">Dopasuj</span> i/lub wprowadzać korekty ręcznie.
                    </p>
                    <p>
                        <b>Uwaga!</b><br/>
                        W skrajnych przypadkach (wynikających z deklarowania przez niektórych
                        lekarzy kilkunastu dyżurów, a przez innych niewielkiej ich liczby oraz 
                        z małej liczby lekarzy), program może nie ułożyć wszystkich dyżurów.
                        Należy wówczas podnieść maksymalną liczbę dyżurów każdego lekarza o 
                        1 lub 2.
                    </p>
                </li>
            </ol>
            <h3 id="okno-grafiku">Okno grafiku<a href="#spis-tresci">[spis treści]</a></h3>
            <ol>
                <li>
                    <p>
                        Grafik ukazuje ostatni tydzień poprzedniego miesiąca, bieżący miesiąc i pierwszy tydzień kolejnego
                        miesiąca.
                    </p>
                </li>
                <li>
                    <p>
                        Po lewej stronie każdego dnia oznaczony jest numer dnia i dzień tygodnia.
                        Soboty i niedziele oznaczone są czerwonym, a dni tygodnia jasnoszarym kolorem.
                        Dni świąteczne oznaczone są trójkątem przeciwnej barwy w prawym górnym 
                        rogu. <b>Długie weekendy oznaczone są w całości jako święta</b>, np. piątek po święcie 
                        Bożego Ciała.
                    </p>
                </li>
                <li>
                    <p>
                        W kolumnach widoczne są pozycje dyżurowe - gdy na oddziale dyżuruje więcej niż 1 lekarz, <b>po lewej
                        znajduje się szef dyżuru ("pierwszy"), potem "drugi" itd.</b> - każda pozycja
                        ma coraz jaśniejszy kolor.
                    </p>
                </li>
                <li>
                    <p>
                        Imię lekarza w danym dniu oznacza, że tego dnia <b>rozpoczyna</b> on dyżur, trwający
                        do ranka następnego dnia. W tej chwili program obsługuje wyłącznie zmiany w okresach
                        24-godzinnych.
                    </p>
                </li>
                <li>
                    <p><b>Ręczne układanie dyżurów</b></p>
                    <p>
                        Klikając ikonę <span className="element-name"><i className="bi bi-person-fill-add"></i></span> na każdej pozycji dyżurowej 
                        możesz obsadzić dyżur, lub zmienić dyżuranta.
                        Po kliknięciu <span className="element-name"><i className="bi bi-person-fill-add"></i></span> rozwinie się <b>lista osób, które mogą wziąć dyżur</b> tego
                        dnia na tej pozycji, zgodnie ze swoimi preferencjami i ułożonymi dyżurami
                        (nie pokażą się osoby obsadzone w sąsiednie dni oraz te, które wyczerpały
                        maksymalną liczbę dyżurów). Dopisek (zam.) oznacza, że wybranie lekarza 
                        usunie go z innej pozycji tego samego dnia.
                    </p>
                    <p>
                        Klikając <span className="element-name"><i className="bi bi-x-lg"></i></span> możesz opróżnić dyżur na danej pozycji.
                    </p>
                    <p>
                        <b>Wskazówka</b><br/>
                        <b>Dyżury ułożone ręcznie nie będą zmieniane przez program.</b> Oznacza to,
                        że możesz ułożyć kilka kluczowych dyżurów lub dni i pozwolić programowi
                        zaproponować pozostałe.
                    </p>
                </li>
                <li>
                    <p><b>Podświetlenie</b></p>
                    <p>
                        Kliknięcie kafla z obsadzonym dyżurem spowoduje podświetlenie dyżurów
                        obsadzonej osoby (ciemnoczerwony), dni i pozycji, które były dla niej
                        dostępne (czerwony) oraz niedostępne (szary) z uwagi na preferencje.
                        W następnym i poprzednim miesiącu dyżury lekarza podświetlą się na 
                        ciemnoszaro, dyżury niedostępne na jasnoszaro, pozostałe bez zmian (na szaro).
                    </p>
                    <p>
                        Powtórne kliknięcie spowoduje odznaczenie tej osoby.
                    </p>
                </li>
            </ol>
            <h3 id="sterowanie-aplikacja">Sterowanie aplikacją<a href="#spis-tresci">[spis treści]</a></h3>
            <ol>
                <li>
                    <p><span className="element-name">Ułóż grafik</span></p>
                    <p>
                        Po kliknięciu możliwy jest jeden z 3 <b>rezultatów</b>:<br/>
                        - grafik zostanie ułożony w całości,<br/>
                        - zostaną wykryte błędy (np. sprzeczności) w preferencjach lekarzy 
                        (grafik nie zostanie ułożony, a program wyświetli raport o błędach w logu),<br/>
                        - grafik zostanie ułożony w części (program pokaże dyżury, które udało mu się ułożyć).
                    </p>
                    <p>
                        Przy układaniu dyżurów program kieruje się następującymi <b>kryteriami (od najważniejszych)</b>:<br/>
                        - zakaz układania dubletów (dyżurów dzień po dniu),<br/>
                        - zakaz układania dyżurów niezgodnych z preferencjami lekarza,<br/>
                        - lekarze mają otrzymać tyle dyżurów, ile zadeklarowali, lub wszyscy proporcjonalnie mniej,<br/>
                        - lekarze powinni mieć tyle samo weekendów zajętych dyżurami (dotyczy "napoczętych" weekendów, a nie liczby dyżurów weekendowych!),<br/>
                        - lekarz powinien otrzymywać dyżury w odstępach co najmniej 5 dni (a gdy to niemożliwe - w jak największych),<br/>
                        - dni mniej i bardziej atrakcyjne powinny być sprawiedliwie rozdzielone.
                    </p>
                </li>
                <li>
                    <p><span className="element-name">Sprawdź ustawienia</span></p>
                    <p>
                        Program sprawdzi:<br/>
                        - czy lekarze deklarują łącznie dość dyżurów, by obsadzić cały miesiąc,<br/>
                        - czy możliwe jest ułożenie dyżurów bez układania dubletów (program sprawdzi, 
                        czy liczba dodanych lekarzy co najmniej dwukrotnie przewyższa liczbę pozycji 
                        dyżurowych, czy każdego dnia dyżur może wziąć minimum tylu lekarzy, co liczba pozycji dyżurowych, oraz
                        czy na każdą parę dni przypada co najmniej dwa razy tyle lekarzy, co liczba pozycji
                        dyżurowych),<br/>
                    </p>
                    <p>
                        <b>Efekty sprawdzenia będą widoczne w logu</b> wraz z dokładnym wskazaniem przyczyn znalezionych problemów.
                    </p>
                </li>
                <li>
                    <p><span className="element-name">Pokaż/Ukryj log</span></p>
                    <p>
                        W logu znajdziesz <b>wyniki sprawdzenia i ułożenia dyżurów</b>, 
                        w tym <b>szczegółowe raporty o wykrytych nieprawidłowościach</b>. Log możesz zamknąć
                        przyciskiem <span className="element-name">✕</span> w prawym górnym rogu, lub klikając <span className="element-name">Ukryj Log</span>.
                        Przyciskami <span className="element-name"><i className="bi bi-chevron-double-up"></i></span> i <span className="element-name"><i className="bi bi-chevron-double-down"></i></span> możesz 
                        powiększyć lub pomniejszyć okno logu.
                    </p>
                </li>
                <li>
                    <p><span className="element-name">Pokaż/Ukryj statystyki</span></p>
                    <p>
                        Po ułożeniu dyżurów w zakładce <span className="element-name">Statystyki</span> znajdziesz <b>informację m. in.
                        o liczbie dyżurów każdego lekarza, liczbie weekendów,
                        w które ma choćby jeden dyżur (Weekendy) i liczbie jego dyżurów we wszystkie weekendy łącznie
                        (Pią-Nie), a także liczbie dyżurów w pozostałe dni tygodnia</b>.
                    </p>
                    <p>
                        Statystyki możesz zamknąć
                        przyciskiem <span className="element-name">✕</span> w prawym górnym rogu, lub klikając <span className="element-name">Ukryj statystyki</span>.
                        Przyciskami <span className="element-name"><i className="bi bi-chevron-double-up"></i></span> i <span className="element-name"><i className="bi bi-chevron-double-down"></i></span> możesz 
                        powiększyć lub pomniejszyć okno statystyk.
                    </p>
                    <p>
                        Kliknięcie w nagłówek danej kolumny (np. Dyżury, Obciążenie itd.) spowoduje <b>sortowanie</b> całej tabeli według
                        danych tej kolumny, od wartości najmniejszej (na górze) do największej (dół). Powtórne kliknięcie 
                        spowoduje <b>odwrócenie kolejności</b>.
                    </p>
                    <p>
                        Pozycja <b>Obciążenie</b> to wskaźnik opracowany na podstawie rozmów z lekarzami.
                        Stanowi on sumę obciążenia ze wszystkich dyżurów - <b>im mniejsza 
                        wartość, tym lepiej</b>. Obciążenie opiera się na następujących założeniach:<br/>
                        - najkorzystniejsze są dyżury we czwartki (wolny następny dzień przedłuża weekend),<br/>
                        - następnie poniedziałki, wtorki i środy,<br/>
                        - następnie piątki,<br/>
                        - następnie niedziele,<br/>
                        - największym obciążeniem są dyżury w sobotę,<br/>
                        - każdy "napoczęty" weekend to dodatkowe obciążenie, niezależnie od liczby dyżurów w ten weekend,<br/>
                        - jako dyżur weekendowy traktowany jest piątek, sobota i niedziela,<br/>
                        - dyżury co drugi, trzeci i czwarty dzień mają wpływ na obciążenie - im mniejszy odstęp, tym większe obciążenie.<br/>
                    </p>
                    <p>
                        <b>Wskazówka</b><br/>
                        Gdy przyzwyczaisz się do korzystania ze statystyk, <b>możesz klikać <span className="element-name">Ułoż grafik</span> trzymając
                        okno statystyk otwarte</b>. Zobaczysz wówczas zmieniające się dane poszczególnych
                        lekarzy i szybko ocenisz, czy warto dokładniej sprawdzić daną propozycję. Przydatne
                        mogą być suma obciążeń i suma "napoczętych" weekendów. Jeżeli lekarze mają ich mało,
                        dyżury zostały rozłożone efektywniej (więcej dyżurów w piątek i następującą niedzielę, niż pojedyńczych
                        dni w różne weekendy). Niska suma obciążeń odzwierciedla nie tylko korzystne ułożenie weekendów,
                        ale także sprawiedliwy podział "lepszych" i "gorszych" dni oraz odpowiednie rozproszenie dyżurów, 
                        np. co tydzień po jednym, zamiast czterech co drugi dzień.
                    </p>
                </li>
                <li>
                    <p><span className="element-name">Wyczyść</span></p>
                    <p>
                        Przycisk ten służy do <b>usuwania ułożonych dyżurów</b>. Po jego naciśnięciu pojawi się okno z prośbą
                        o potwierdzenie decyzji. Następnie będziesz mógł <b>wybrać</b> między usunięciem jedynie dyżurów
                        ułożonych przez program a usunięciem wszystkich, łącznie z ułożonymi przez użytkownika.
                    </p>
                </li>
                <li>
                    <p>Strzałki <span className="element-name"><i className="bi bi-skip-backward-fill"></i></span> i <span className="element-name"><i className="bi bi-skip-forward-fill"></i></span> - historia</p>
                    <p>
                        Strzałki służą do poruszania się w historii. Program zapamiętuje 6 poprzednich zmian w grafiku dyżurów oraz obecny stan.
                        Przez zmianę należy rozumieć zarówne ułożenie i usunięcie wszystkich dyżurów, jak u ułożenie lub usunięcie
                        pojedyńczego dyżuru. <b>Aby poruszać się wstecz w historii, klikaj <span className="element-name"><i className="bi bi-skip-backward-fill"></i></span>, zaś naprzód - <span className="element-name"><i className="bi bi-skip-forward-fill"></i></span>.</b> 
                    </p>
                    <p>
                        <b>Uwaga!</b><br/>
                        Jeżeli w trakcie przeglądania historii zdecydujesz się zmienić dyżury, późniejsze (niż aktualnie wyświetlany) 
                        stany historii zostaną wymazane i zastąpione nową zmianą.
                    </p>
                </li>
                <li>
                    <p><span className="element-name">Pobierz</span> - zapisywanie na dysk</p>
                    <p>
                        Po naciśnięciu przycisku <span className="element-name">Pobierz</span>, program wygeneruje plik <b>arkusz programu Excel (.xlsx)</b> zawierający
                        aktualnie ułożone dyżury i otworzy okno zapisywania go na dysku komputera.
                    </p>
                </li>
                <li>
                    <p><span className="element-name">Zapisz</span> - zapisywanie na serwerze</p>
                    <p>
                        Po naciśnięciu przycisku <span className="element-name">Zapisz</span>, program <b>zapisze aktualny stan dyżurów oraz preferencje lekarzy</b> na 
                        serwerze. Umożliwi to późniejsze przeglądanie grafiku i jego edycję. Zapisane dane zostaną
                        automatycznie wczytane po ponownym otworzeniu grafiku. Jeżeli zamkniesz okno układania dyżurów
                        bez ich zapisywania, ułożone od ostatniego zapisu dyżury zostaną utracone!
                    </p>
                </li>
            </ol>

            <h2 className="mt-4" id="statystyki">Statystyki<a href="#spis-tresci">[spis treści]</a></h2>
            <ol>
                <li>
                    <p>
                        W menu głównym lub bocznym <span className="element-name">☰</span> możesz otworzyć <span className="element-name">Statystyki</span>. 
                        Znajdziesz tam informacje analogiczne jak w oknie statystyk na ekranie układania dyżurów - 
                        będą to  <b>średnie miesięczne</b> z wszystkich grafików, w których lekarz był obsadzony. 
                        Znajdziesz też informację o tym, ile grafików lekarz obsadzał.
                    </p>
                </li>
                <li>
                    <p>
                        Początkowo tabela statystyk jest pusta. Aby zobaczyć dane, <b>wybierz lekarzy do porównania</b>, zaznaczając ich
                        w lewej kolumnie. Możesz też użyć przycisku <span className="element-name">Zaznacz/Odznacz wszystkich</span>.
                    </p>
                </li>
                <li>
                    <p>
                        Kliknięcie w nagłówek danej kolumny (np. Dyżury, Obciążenie itd.) spowoduje <b>sortowanie</b> całej tabeli według
                        danych tej kolumny, od wartości najmniejszej (na górze) do największej (dół). Powtórne kliknięcie 
                        spowoduje <b>odwrócenie</b> kolejności.
                    </p>
                </li>
            </ol>
            </div>
        </OverlayWindow>
    );
}