import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
      <div className="card">
        <h2>
          Suite for violin and piano (1943)
          <br />
          <br />
          William Grant Still (1895-1978)
        </h2>
        <Box>
          <Grid className="row" container spacing={2} alignItems="center">
            <Grid className="image-col" item xs={12} md={5}>
              <Carousel autoPlay={false} animation="slide">
                <div>
                  <img className="rec-image" src="/african-dancer.jpg" />
                  <p>
                    Richmond Barthé
                    <br />
                    “African Dancer”
                  </p>
                </div>
                <div>
                  <img className="rec-image" src="/mother-child.png" />
                  <p>
                    Sargent Johnson
                    <br />
                    “Mother and Child”
                  </p>
                </div>
                <div>
                  <img className="rec-image" src="/gamin.jpg" />
                  <p>
                    Augusta Savage
                    <br />
                    “Gamin”
                  </p>
                </div>
              </Carousel>
              {/* <img className="rec-image" src="../african-dancer.jpg" /> */}
            </Grid>
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
          </Grid>
        </Box>
        <div className="column-wrapper">
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>
      <div className="card">
        <h2>A Question of Light (2011) - Jake Heggie (1961- )</h2>
        <p>
          Featuring poetry written by Heggie’s frequent collaborator, Gene
          Scheer, the six songs in A Question of Light are all inspired by
          artwork found in the Dallas Museum of Art. The songs are not connected
          by a narrative like in a traditional song cycle; each song is an
          emotional, personal response to the art, almost as if one were walking
          through a museum and stopped for a bit in front of each of these six
          pieces. The idea of “who are you?” introduced in the first song
          carries throughout the rest of the cycle, proving how art and our
          sincere response to it can help us examine and shape our own
          identities.
        </p>
      </div>
      <div className="card">
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
      </div>
      <div className="card">
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
