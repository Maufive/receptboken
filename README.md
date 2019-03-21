# Välkommen till Receptboken!

Receptboken är ett hobbyprojekt som jag byggt på MERN-stacken. (MongoDB, Express, React, Node)

[DEMO HERE](https://www.receptboken.online)

### Features

- Authentication med hjälp av PassportJS + JSONWebTokens
- Registrerade användare kan lägga upp egna recept
- Registrerade användare kan spara olika recept
- Betygsätt olika recept
- Spara ingredienserna i recepten till en inköpslista, som i sin tur går att enkelt maila till den e-postadress som användaren är registrerad med.

### Bakgrund

Problemet jag ville lösa var att jag har olika recept liggandes på olika plattformar, och ville samla dem på ett och samma ställe. Jag ville göra det enkelt att ladda upp nya recept, kunna söka och spara olika recept samt kunna spara ingredienserna i en inköpslista som jag enkelt kan ta med mig på affären för att handla.

Jag hade tidigare ingen relevant erfarenhet med NodeJS och backend-utveckling, så detta blev ett perfekt tillfälle för mig att lära mig bygga en egen backend och ett API att jobba med. Detta skulle såklart bli den största utmaningen för mig i projektet. Jag ville ha ett eget inloggningssystem så jag byggde det med hjälp av PassportJS och JSON Webtokens.

I klienten så använder jag mig av NextJS då jag i början hade SEO i åtanke, och valde därför att gå med NextJS istället för GatsbyJS. Stylingen i projektet är byggt på Styled-Components istället för traditionell CSS då jag ville försöka hålla stylingen komponentbaserad och försöka undvika allt för djupt nestade styles. Blev inte helt imponerad Styled-Components, men kommer säkert använda det någon gång i framtiden.
