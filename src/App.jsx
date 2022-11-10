import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Carousel from 'react-material-ui-carousel';

import 'swiper/css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Rachel Bennett
        <br />
        11/12/2022
      </h1>
      <div className="card" id="section1">
        <h2>
          Suite for violin and piano (1943) - William Grant Still (1895-1978)
        </h2>
        <Box>
          <Grid className="row" container spacing={2} alignItems="center">
            <Grid item xs={12} md={7}>
              <p>
                William Grant Still’s 1943 suite for violin and piano references
                three works of art, all created in the 1930s by artists
                associated with the Harlem Renaissance. Still said of the suite:
                “when I was asked to compose a suite for violin and piano, I
                thought of three contemporary Negro artists whom I admire and
                resolved to try to catch in music my feeling for an outstanding
                work by each of them.” This work showcases Still’s compositional
                training, learned at traditional conservatories like Oberlin and
                the New England Conservatory of Music, as well as his love for
                popular music, including blues and folk.
              </p>
            </Grid>
            <Grid className="image-col" item xs={12} md={5}>
              <Carousel
                autoPlay={false}
                animation="slide"
                swipe={false}
                navButtonsAlwaysVisible={true}
              >
                <div>
                  <img className="rec-image" src="african-dancer.jpg" />
                  <p>
                    Richmond Barthé
                    <br />
                    “African Dancer”
                  </p>
                </div>
                <div>
                  <img className="rec-image" src="mother-child.png" />
                  <p>
                    Sargent Johnson
                    <br />
                    “Mother and Child”
                  </p>
                </div>
                <div>
                  <img className="rec-image" src="gamin.jpg" />
                  <p>
                    Augusta Savage
                    <br />
                    “Gamin”
                  </p>
                </div>
              </Carousel>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="card" id="section2">
        <h2>A Question of Light (2011) - Jake Heggie (1961- )</h2>
        <Box>
          <Grid className="row" container spacing={2} alignItems="center">
            <Grid item xs={12} md={7}>
              <p>
                Featuring poetry written by Heggie’s frequent collaborator, Gene
                Scheer, the six songs in A Question of Light are all inspired by
                artwork found in the Dallas Museum of Art. The songs are not
                connected by a narrative like in a traditional song cycle; each
                song is an emotional, personal response to the art, almost as if
                one were walking through a museum and stopped for a bit in front
                of each of these six pieces. The idea of “who are you?”
                introduced in the first song carries throughout the rest of the
                cycle, proving how art and our sincere response to it can help
                us examine and shape our own identities.
              </p>
            </Grid>
            <Grid className="image-col" item xs={12} md={5}>
              <Carousel
                autoPlay={false}
                animation="slide"
                swipe={false}
                navButtonsAlwaysVisible={true}
              >
                <div>
                  <img className="rec-image" src="light.jpg" />
                  <p>
                    René Magritte
                    <br />
                    “The Light of Coincidences”
                  </p>
                </div>
                <div>
                  <img className="rec-image" src="eccentric.png" />
                  <p>
                    Maya, c. AD 600-900
                    <br />
                    Eccentric Flint
                  </p>
                </div>
                <div>
                  <img className="rec-image" src="yellow-roses.png" />
                  <p>
                    Gustave Caillebotte
                    <br />
                    “Yellow Roses in a Vase”
                  </p>
                </div>
                <div>
                  <img className="rec-image" src="place.png" />
                  <p>
                    Piet Mondrian
                    <br />
                    “Place de la Concorde”
                  </p>
                </div>
                <div>
                  <img className="rec-image" src="hombre.png" />
                  <p>
                    Rufino Tamayo
                    <br />
                    “El Hombre”
                  </p>
                </div>
                <div>
                  <img className="rec-image" src="watch.jpg" />
                  <p>
                    Gerald Murphy
                    <br />
                    “Watch”
                  </p>
                </div>
              </Carousel>
            </Grid>
          </Grid>
        </Box>
        <div className="accContain">
          <Accordion className="expand">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <b>René Magritte “The Light of Coincidences”</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Who are you?
                <br />
                Will you come out of the shadows?
                <br />
                Not to kiss, but to be kissed.
                <br />
                Not to choose, but to be chosen.
                <br />
                To be born in a baptism of light.
                <br />
                <br />
                It is midnight.
                <br />
                Clouds shroud the moon and stars
                <br />
                drenched in black velvet.
                <br />
                <br />
                A candle, placed on a table,
                <br />
                with indiscriminate ecstasy,
                <br />
                touches everything it can find
                <br />
                with a question of light:
                <br />
                <br />
                Who are you?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="expand">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="panel1b-content"
              id="panel1b-header"
            >
              <Typography variant="h6">
                Maya, c. AD 600-900, Eccentric Flint
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Carve away – what does not bring me closer to the sky.
                <br />
                All that slows – the current racing towards what cannot die.
                <br />
                <br />
                The fertile dust of starlight
                <br />
                never quite dissolved
                <br />
                The bloom of endless echo
                <br />
                of a chord yet unresolved.
                <br />
                <br />
                Over and under, over and under,
                <br />
                We are more than the things we pray.
                <br />
                Over and under, over and under,
                <br />
                through the waves of the Milky Way.
                <br />
                <br />
                A grammatical constellation
                <br />
                A syntactical splash of sparks
                <br />
                As the stars undulate the heavens
                <br />
                Twisting into question marks
                <br />
                <br />
                And you wonder where you’re going.
                <br />
                Where did it all begin?
                <br />
                Does the voyage to each destination
                <br />
                Take me back to a place I’ve already been?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="expand">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <Typography variant="h6">
                Gustave Caillebotte “Yellow Roses in a Vase”
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Five days after his father died
                <br />
                While the flowers that filled the house
                <br />
                Were being thrown away
                <br />
                He sat alone and stared
                <br />
                At the one remaining bouquet
                <br />
                <br />
                Once yellow blooms, with melancholic grace
                <br />
                Were draining, bleeding towards the color
                <br />
                Of bone, clay, and cloud
                <br />
                And suddenly, he spoke his secret out loud
                <br />
                <br />
                “In the war, thirty years ago, I was so scared
                <br />
                When I raised my arms to surrender.
                <br />
                There were two hundred of us.
                <br />
                I was one of only fourteen who survived.”
                <br />
                <br />
                He spoke of his friends, and before he walked away, said:
                <br />
                “I remember all of them...all of them.”
                <br />
                On the cold, marble table, several more petals
                <br />
                Had fallen from the stem.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="expand">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography variant="h6">
                Piet Mondrian “Place de la Concorde”
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                It’s a map, a grid, where nothing’s been plotted,
                <br />
                A vigorous pulse where everything’s knotted!
                <br />
                A woven dynamic, a mysterious chord,
                <br />
                An echo, a whisper at the Place de la Concorde.
                <br />
                <br />
                Come away, Oh Beauty,
                <br />
                Come away, come away.
                <br />
                Somethin’s ‘bout to happen
                <br />
                On the Champs-Elysees!
                <br />
                <br />
                No story, no glory, no fable to share.
                <br />
                Pull every thread till there’s nothing to wear!
                <br />
                <br />
                In a pocket, in a corner, in the wink of an eye,
                <br />
                Something is hidden you cannot deny.
                <br />
                In between all the lines, where the rainbow is stored,
                <br />A memory, a heartbeat at the Place de la Concorde.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="expand">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="panel1e-content"
              id="panel1e-header"
            >
              <Typography variant="h6">Rufino Tamayo “El Hombre”</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ¿Y que voy a besar?
                <br />
                ¿Y que voy a tocar?
                <br />
                ¿Y cuando cruzará mi espíritu?
                <br />
                <br />
                There are no borders in the sky.
                <br />
                No one owns the stars above.
                <br />
                No walls divide us from each other.
                <br />
                Or tell us what deserves our love.
                <br />
                <br />
                Will you reach beyond the weight of history?
                <br />
                Beyond the prison of low esteem,
                <br />
                Where the journey starts in clay and shadows
                <br />
                But ends wherever you choose to dream?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="expand">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="panel1f-content"
              id="panel1f-header"
            >
              <Typography variant="h6">Gerald Murphy “Watch”</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                One more story?
                <br />
                One more song?
                <br />
                I don’t think so.
                <br />
                Do you know what time it is?
                <br />
                <br />
                Look at my watch.
                <br />
                What do you see?
                <br />
                The big hand is – here
                <br />
                And the little hand is – there
                <br />
                And that means it’s - somebody’s bedtime
                <br />
                <br />
                What?
                <br />
                Oh. You’re right. It stopped.
                <br />
                No. It’s still your bedtime.
                <br />
                Time never really stops.
                <br />
                <br />
                Between the hours run the minutes
                <br />
                Look! The second hand is chasing them away.
                <br />
                Between the seconds is infinity:
                <br />
                Everything you didn’t get to do today.
                <br />
                <br />
                Time doesn’t stop
                <br />
                If I don’t wind my watch.
                <br />
                Nobody knows where it comes from
                <br />
                Or why it floats away.
                <br />
                <br />
                There go the hours and the minutes
                <br />
                They scatter no matter what we do
                <br />
                But, according to my watch, when you wake up
                <br />
                You’ll have all the time in the world
                <br />
                waiting for you.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="card" id="section3">
        <h2>
          Four Songs for soprano, cello, and piano (1994) - André Previn
          (1929-2019)
        </h2>
        <p>
          André Previn’s collaborators in creating and premiering these songs
          represent a “who’s who” of great American creators of the 20 th
          century – soprano Sylvia McNair, cellist Yo-Yo Ma, and poetry by Toni
          Morrison. While best known for her seminal works on the Black American
          experience, Morrison chose to write these poems on more universal
          human experiences like longing, love, loneliness, regret, and “who
          needs a man?!?”
        </p>
        <div>
          <Accordion className="expand">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                <b>Mercy</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                I could watch
                <br />
                heads
                <br />
                turn from the traveler’s look
                <br />
                the camera’s probe
                <br />
                bear the purity of their
                <br />
                shame
                <br />
                hear mute desolation in syllables
                <br />
                ancient as
                <br />
                death.
                <br />
                I could do these things
                <br />
                if
                <br />
                only if only
                <br />
                I knew that when milk
                <br />
                spills
                <br />
                and hearts stop
                <br />
                underheel
                <br />
                some small thing gone
                <br />
                chill
                <br />
                is right
                <br />
                to warm toward a touch because
                <br />
                mercy
                <br />
                lies in wait
                <br />
                like a shore.
                <br />
              </Typography>
              <br />
              <Typography sx={{ fontSize: '0.8rem' }}>
                <i>
                  Examines how the media portrays suffering, and the speaker’s
                  embarrassment at this exploitation of the privacy of the
                  dying. They can only bear this shame if they know that
                  ultimately those suffering will receive mercy.
                </i>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="expand">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <b>Stones</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                I don’t need no man
                <br />
                telling me I ain’t one.
                <br />
                My trigger finger strong
                <br />
                as his on a shot gun.
                <br />
                Buttercake and roses smooth
                <br />
                stones in my bed.
                <br />
                Handmade quilts cover
                <br />
                stones in my bed.
                <br />
                I don’t need no man
                <br />
                telling me I ain’t one.
                <br />
                My backbone ain’t like his
                <br />
                but at least I got one.
                <br />
                High-heeled slippers break
                <br />
                stones in my bed.
                <br />
                Games played at night trick
                <br />
                stones in my bed.
                <br />
                I don’t need no man
                <br />
                telling me.
                <br />
              </Typography>
              <br />
              <Typography sx={{ fontSize: '0.8rem' }}>
                <i>
                  Based on an old blues song, “Rocks in my Bed,” the speaker
                  talks a big talk about not needing a man but is secretly
                  bitter that all she has to warm her bed at night are warm
                  stones, not a lover. But at least there’s no man around trying
                  to tell her what to do!
                </i>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="expand">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <b>Shelter</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                In this soft place
                <br />
                Under your wings
                <br />
                I will find shelter
                <br />
                From ordinary things.
                <br />
                <br />
                Here are the mountains
                <br />
                I want to scale
                <br />
                Amazon rivers
                <br />
                I’m dying to sail.
                <br />
                <br />
                Here the eyes of the forest
                <br />
                I can hold in a stare
                <br />
                And smile at the movement
                <br />
                Of Medusa’s green hair.
                <br />
              </Typography>
              <br />
              <Typography sx={{ fontSize: '0.8rem' }}>
                <i>
                  The security found in this couple’s love makes the speaker
                  feel free to dream big dreams, knowing their partner will
                  always be their soft place to land.
                </i>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="expand">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <b>The Lacemaker</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                I am as you see
                <br />
                what most becomes me:
                <br />
                miles skipped
                <br />
                cancelled trips
                <br />
                masters yet unmet.
                <br />
                Lace alone is loyal, sacred, royal, in control
                <br />
                of crimes stopped
                <br />
                by patterns of blood bred to best behavior.
                <br />
                As you see I am
                <br />
                what has become of me.
              </Typography>
              <br />
              <Typography sx={{ fontSize: '0.8rem' }}>
                <i>
                  The lacemaker has settled for less in her life – no adventure
                  or passion, just her job and propriety. She’s respectable
                  (“what most becomes me”) but regrets not living a life where
                  she was able to choose joy (“what has become of me”).
                </i>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="card" id="section4">
        <h2>Holy Roller (1997) - Libby Larsen (1950- )</h2>
        <div className="column-wrapper">
          <div className="column">
            <p>
              Libby Larsen’s spark of inspiration for Holy Roller was the Azusa
              Street Revival, the years long revival meeting that birthed the
              modern American Pentecostal movement. The shouts, yells, songs,
              and general outpourings of the preachers and congregants at such
              meetings are what motivated Larsen to “capture” a revival sermon
              “in the sounds of the alto saxophone and piano.” Careful listening
              will detect Larsen making use of familiar hymns, “Oh When the
              Saints” and “At the River,” to evoke the religious experience.
            </p>
          </div>
        </div>
      </div>
      <p className="read-the-docs">Made by her very handsome husband</p>
    </div>
  );
}

export default App;
