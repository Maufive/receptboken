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

Måste fixas innan jag pushar appen online:

- Lägg till pagination (Max 20 recept?)
- Lägg till funktion för att ta bort ett recept men bara om det är den användaren som skapat det
- Lägg till PropTypes i alla komponenter
- Lägg till funktion för att redigera ett uppladdat recept (om man själv skapat det)

Uppgraderingar som bör göras:

- Lägg till funktion för bortglömt lösenord, så man får ett nytt via email
- Lägg till ett steg i verifkationskedjan genom att skicka en token via email som användaren ska bekräfta
- Receptets betyg visas inte när man går in på ett specifikt recept
