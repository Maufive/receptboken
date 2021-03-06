To-Do:

👍 - Visa att användaren har sparat ett visst recept när man kommer tillbaka till det
👍 - Om man är inloggad (Username i Header), och går in på ett recept, sen refreshar, så försvinner username
👍 - Byt ut alla ikoner mot SVGs
👍 - Uppdatera designen på NewRecipeForm så den matchar stylingen i loginformen
👍 - Fundera på en lösning för att göra en inköpslista
👍 - Visa "Skapat"-datum på varje recept (och eller card)
👍 - Lägg till ett menyval för "Sparade recept" / Lägg till i profilen
👍 - Se till att alla protected routes skickar JWT token som Auth Bearer i requestsen
👍 - Lägg till funktion för att visa vilka recept en användare sparat
👍 - Lägg till funktion för att redigera användarprofilen
👍 - Fixa en sökfunktion för att söka efter recept
👍 - Lägg till pagination. Fixade InfiniteScrolling istället för Pagination, men det löser samma problem.
👍 - Redesigna texten i SingleRecept-componenten.
👍 - Redesigna profilsidan
👍 - Lägg till funktion för att ta bort ett recept men bara om det är den användaren som skapat det
👍 - Mobilanpassa hela skiten
👍 - Mer margin upp & ner på SingleRecept
👍 - Byt färg på Success-meddelandet
👍 - Bredda ut receptcards på mobila enheter
👍 - Profilbilder som laddas upp blir inte alltid runda (Cloudinary)
👍 - Bilden på SingleRecept rinner över i Safari för iOS

Måste fixas innan jag pushar appen online:

- Lägg till PropTypes i alla komponenter
- Lägg till funktion för att redigera ett uppladdat recept (om man själv skapat det)

Uppgraderingar som bör göras:

- Lägg till så sökfunktionen även söker på beskrivningar och taggar
- Lägg till funktion för bortglömt lösenord, så man får ett nytt via email
- Lägg till ett steg i verifkationskedjan genom att skicka en token via email som användaren ska bekräfta
- Receptets betyg visas inte när man går in på ett specifikt recept

Knapp för att avbryta om man inte vill fortsätta med ett recept eller uppdatera profilen
När man sparar sina ändringar på profil så blir det unexpected error
Ikon när man laddar ner webbsidan som app i telefonen
