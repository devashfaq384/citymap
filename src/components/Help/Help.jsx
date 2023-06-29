import React from 'react'

const Help = () => {

    const data = [
      {
        heading : 'Algemeen',
        QsAns: [
          {
            Question : 'Wie zijn wij?',
            Answer : 'Wecho ® is het hét toonaangevende merk voor akoestische panelen, volledig gericht op design en duurzaamheid. Wij zijn als bedrijf in Nederland gevestigd, maar leveren ook buiten Nederland. Onze panelen zijn uniek en gemaakt van de allerbeste kwaliteit. 1 Wecho is ontstaan vanuit onze andere onderneming: Tegen de Wand. Bij Tegen de Wand focussen wij ons voornamelijk op maatwerk bestellingen wanddecoratie, dit gaat veelal om B2B business. Het leek ons leuk om met deze webshop een nieuw markt aan te spreken met een ander product, wat natuurlijk wel een van onze specialiteiten betreft.'
          },
          {
            Question : 'Hoe maak ik een akoestisch schilderij?',
            Answer : 'Hoe maak ik een akoestisch schilderij? Het maken van een akoestisch schilderij is eenvoudig. Je kiest de plek die je wilt vastleggen op een akoestisch schilderij dat speciaal voor jou gemaakt is! Je kunt gemakkelijk een akoestisch schilderij maken door op de knop \'maak een akoestisch schilderij\' te klikken. Kies je favoriete plek. Wil je dat het schilderij horizontaal of verticaal is? Of wil je een andere stijl? Je kunt het allemaal aanpassen met de Wecho-editor.'
          },
          {
            Question : 'Hoe gaan jullie om met privacy?',
            Answer : 'We nemen de verantwoordelijkheid voor al jouw persoonlijke informatie, zoals je naam, adres en alle andere gegevens die je ons verstrekt. We zullen die informatie niet aan andere partijen verstrekken. '
          }
        ]
      },
      {
        heading : 'Het akoestische paneel',
        QsAns: [
          {
            Question : 'Duurzame wanddecoratie met Wecho’s akoestische panelen en schilderijen',
            Answer : 'Duurzaamheid is een belangrijk onderwerp in onze samenleving en het is ook belangrijk om te overwegen bij de inrichting van onze huizen en kantoren. Gelukkig zijn er veel opties voor duurzame wanddecoratie, maar één van de beste opties is het gebruik van akoestische panelen of schilderijen van Wecho.'
          },
          {
            Question : 'Vervangbare print',
            Answer : 'Een van de grootste voordelen van Wecho’s akoestische panelen en schilderijen is dat ze een vervangbare print hebben. Dit betekent dat wanneer je het interieur opnieuw wilt decoreren, je de print kunt vervangen zonder dat je het hele paneel of schilderij hoeft te vervangen. Dit is niet alleen duurzamer, maar het bespaart je ook geld in de toekomst.'
          },
          {
            Question : 'Duurzame productie',
            Answer : 'Wecho produceert hun akoestische panelen en schilderijen op een duurzame manier. Ze gebruiken alleen milieuvriendelijke materialen en hebben een efficiënt productieproces. Bovendien worden alle producten in Nederland geproduceerd. Dit betekent dat je kunt genieten van jouw wanddecoratie zonder dat je je zorgen hoeft te maken over de impact op het milieu en tegelijkertijd ondersteun je de lokale economie.'
          },
          {
            Question : 'Elegant design van je duurzame wanddecoratie',
            Answer : 'De akoestische panelen en schilderijen van Wecho zijn elegant en tijdloos. Ze zijn beschikbaar in een breed scala aan kleuren en motieven, dus er is voor elke smaak iets te vinden. 1Als je op zoek bent naar duurzame wanddecoratie, dan is een akoestisch paneel of schilderij van Wecho een uitstekende keuze. Dankzij de vervangbare print, duurzame productie, elegant design en snelle levering, zullen deze producten een geweldige toevoeging zijn aan uw interieur. Wil je meer weten over onze duurzame wanddecoratie? Klik dan op een van de onderstaande buttons.'
          },
          {
            Question : 'Wat zijn de afmetingen van de akoestische schilderijen?',
            Answer : ''
          },
          {
            Question : 'S (50x70 CM) ',
            Answer : ''
          },
          {
            Question : 'M (60x85 CM)',
            Answer : ''
          },
          {
            Question : 'L (72x100 CM) ',
            Answer : ''
          },
          {
            Question : 'XL (86x120 CM) ',
            Answer : ''
          },
          {
            Question : 'XXL (107x150 CM) ',
            Answer : ''
          }
        ]
      },
      {
        heading : 'Levering & verzending',
        QsAns: [
          {
            Question : 'Hoe lang duurt het voordat ik mijn poster ontvang?',
            Answer : 'Levering duurt doorgaans 2-6 werkdagen.'
          },
          {
            Question : 'Heb je ordertracking?',
            Answer : 'Ja! Zodra uw artikel is verzonden, ontvangt u een e-mailmelding met een trackinglink om uw Wecho-bestelling te volgen.'
          },
          {
            Question : 'Wat moet ik doen als ik het verkeerde verzendadres heb ingevuld?',
            Answer : 'Als het adres om wat voor reden dan ook onjuist is, schrijf ons dan zo snel mogelijk een e-mail naar info@wecho.nl zodat we het adres aan onze kant kunnen wijzigen. Houd er echter rekening mee dat we het adres niet meer kunnen wijzigen zodra het product is verzonden vanaf onze productielocatie!'
          },
        ]
      },
      {
        heading : 'Terugbetalingen en retouren',
        QsAns: [
          {
            Question : 'Mijn schiderij is beschadigd tijdens het verzenden, wat kan ik doen?',
            Answer : 'Je kunt binnen 7 dagen na de levering contact met ons opnemen via info@wecho.nl. In je e-mail kun je een afbeelding van het beschadigde product en van de verpakking meesturen.'
          },
          {
            Question : 'Kan ik mijn custom schilderij retourneren?',
            Answer : 'Deze tool maakt enkel custom designs, dit houdt in, dat u in tegenstelling tot onze meeste artikelen deze niet kunt retourneren. 1Ik heb per ongeluk de naam van de stad verkeerd gespeld of de verkeerde maat besteld, wat kan ik doen? Je kunt wijzigingen aanbrengen in je poster tot 6 uur nadat je je bestelling hebt geplaatst. Neem zo snel mogelijk contact met ons op via info@wecho.nl om te zien of we je bestelling kunnen wijzigen. Klanttevredenheid staat bij ons voorop, maar als je gepersonaliseerde poster al is afgedrukt, kunnen we helaas geen restitutie aanbieden of de fout wijzigen.'
          },
        ]
      },
    ]
    
    
  return (
    <div className='mx-20' >
      <div className='text-center text-[40px] tracking-wide'  >FAQs</div>
      {/* data map  */}
      {
        data.map((value , ind)=>{
      return (
            <div key={ind} >
              <div className='text-2xl my-4' >
                {/* heading  */}
                {value.heading}
              </div>
              {
                value.QsAns.map((Qs , ind )=>{
                  const paragraphs = Qs.Answer.split('1');
                  return(
                    <div className='mx-4' key={ind} >
                    {/* Question*/}
                      <div className={`font-bold text-gray-700 text-[17px] my-2 ${Qs.Question.includes('0') ? 'mx-4 !my-0' : " "}  `} >
                        {Qs.Question}
                      </div>
                      {/* Answer  */}
                      <div className='text-gray-600 my-2' >
                        {paragraphs[0]}
                      </div>
                      <div className='text-gray-600 my-2' >
                        {paragraphs[1]}
                      </div>
                    </div>
                  )
                })
              }
            </div>

      )

        })
      }
    
    </div>
  )
}

export default Help