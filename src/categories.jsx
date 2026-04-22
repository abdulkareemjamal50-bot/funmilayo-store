import React from "react";
import Card from "./card";
import { Row, Col } from "react-bootstrap";
import { FaGlassWhiskey } from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";
import { FaCookieBite } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { GiChiliPepper } from "react-icons/gi";
import { LuCupSoda } from "react-icons/lu";
import { MdCleaningServices } from "react-icons/md";
// BEVERAGES
import viva1 from "./assets/milo car.webp";
import viva2 from "./assets/milo stch.jpg";
import viva3 from "./assets/milo tin.jpg";
import shop1 from "./assets/oval.jpg";
import shop2 from "./assets/ovaltine.webp";
import shop3 from "./assets/ov.jpg";
import candy1 from "./assets/bon.jpg";
import candy2 from "./assets/bourn car.jpg";
import candy4 from "./assets/bourn.webp";
import candy5 from "./assets/bourn stch.jpeg";
import candy3 from "./assets/twisco.jpg";
import milk1 from "./assets/cowchoc.webp";
import milk2 from "./assets/coff.webp";
import milk3 from "./assets/twi ref.jpg";
import milk4 from "./assets/cho st.jpg";
import milk5 from "./assets/choc.webp";
import milk6 from "./assets/dansmallest.jpg";
import milk7 from "./assets/dansmall.jpg";
import milk8 from "./assets/danbag2.webp";
import milk9 from "./assets/danbag.jpg";
import milk10 from "./assets/nescafe.webp";
import milk11 from "./assets/nescafestick.jpg";
import milk12 from "./assets/nescafetin.webp";
import dia1 from "./assets/cowbellcar.webp";
import dia2 from "./assets/cowbellsmal.jpg";
import dia3 from "./assets/cowbellstch.png";
import dia4 from "./assets/danocar.png";
import dia5 from "./assets/danoscar.jpg";
import dia6 from "./assets/danostch.jpg";
import dia7 from "./assets/holevap.jpg";
import dia8 from "./assets/hollanpop.jpg";
import dia9 from "./assets/kremela.webp";
import dia10 from "./assets/miksiref.jpg";
import dia11 from "./assets/milksi.webp";
import dia12 from "./assets/peakbigcar.png";
import dia13 from "./assets/peakcar.jpg";
// import dia14 from "./assets/peakfilled.jpg";
import dia15 from "./assets/peakliq.webp";
import dia16 from "./assets/threecrown.png";
import dia17 from "./assets/threecrowncar.jpg";
import dia18 from "./assets/threecrownslate.jpg";
// SNACKS
import sna1 from "./assets/bis1.jpg";
import sna2 from "./assets/bis2.jpg";
import sna3 from "./assets/bis3.jpg";
import sna4 from "./assets/bis4.png";
import sna5 from "./assets/bis5.webp";
import sna6 from "./assets/bis6.webp";
import sna7 from "./assets/bis7.webp";
import sna8 from "./assets/bis8.png";
import sna9 from "./assets/bis9.jpg";
import sna10 from "./assets/bis10.jpg";
import sna11 from "./assets/bis11.png";
import sna12 from "./assets/bis12.jpeg";
import sna13 from "./assets/bis13.jpg";
import sna14 from "./assets/bis14.jpg";
import sna15 from "./assets/bis15.webp";
import sna16 from "./assets/bis16.jpg";
import sna17 from "./assets/bis17.webp";
import sna18 from "./assets/bis18.jpg";
import sna19 from "./assets/bis19.webp";
import sna20 from "./assets/bis20.webp";
import sna21 from "./assets/bis21.png";
import sna22 from "./assets/bis22.jpg";
import sna23 from "./assets/bis23.jpg";
import sna24 from "./assets/bis24.jpg";
import sna25 from "./assets/swe1.jpg";
import sna26 from "./assets/swe2.jpg";
import sna27 from "./assets/swe3.avif";
import sna28 from "./assets/swe4.png";
import sna29 from "./assets/swe5.avif";
import sna30 from "./assets/swe6.jpg";
import sna31 from "./assets/swe7.png";
import sna32 from "./assets/swe8.webp";
import sna33 from "./assets/swe9.webp";
import sna34 from "./assets/swe10.jpg";
import sna35 from "./assets/swe11.jpg";
import sna36 from "./assets/swe12.png";
import sna37 from "./assets/swe13.jpg";
import sna38 from "./assets/dri1.webp";
import sna39 from "./assets/dri2.avif";
import sna40 from "./assets/dri3.jpg";
import sna41 from "./assets/dri4.webp";
import sna42 from "./assets/dri5.jpg";
import sna43 from "./assets/dri6.jpg";
import sna44 from "./assets/dri7.png";
import sna45 from "./assets/dri8.png";
import sna46 from "./assets/dri9.jpg";
// GROCERIES
import groc1 from "./assets/indomie.jpg";
import groc2 from "./assets/indomie2.jpg";
import groc3 from "./assets/onion.jpg";
import groc4 from "./assets/indopack.jpg";
import groc5 from "./assets/mimee.jpeg";
import groc6 from "./assets/minimie.png";
import groc7 from "./assets/curry.jpg";
import groc8 from "./assets/gino.jpg";
import groc9 from "./assets/ginocar.webp";
import groc10 from "./assets/ginopart.webp";
import groc11 from "./assets/knorr.webp";
import groc12 from "./assets/maggicarton.jpg";
import groc13 from "./assets/maggismall.png";
import groc14 from "./assets/partyjo.jpeg";
import groc15 from "./assets/poweroil.webp";
import groc16 from "./assets/powoil.jpg";
import groc17 from "./assets/salt.jpg";
import groc18 from "./assets/saltpack.png";
import groc19 from "./assets/seasonpowder.webp";
import groc20 from "./assets/spagh.jpg";
import groc21 from "./assets/spapack.jpg";
import groc22 from "./assets/titus.jpg";
import groc23 from "./assets/tasty.jpg";
import groc24 from "./assets/terra.jpg";
import groc25 from "./assets/thyme.jpg";
import groc26 from "./assets/custard.jpg";
import groc27 from "./assets/cornref.jpg";
import groc28 from "./assets/cerelac.jpg";
import groc29 from "./assets/butter.jpg";
import groc30 from "./assets/bama.png";
import groc31 from "./assets/blueband.jpg";
// HH ESSENTIALS
import hh0 from "./assets/premier.jpg";
import hh1 from "./assets/soa1.jpg";
import hh2 from "./assets/soa2.jpg";
import hh3 from "./assets/soa3.jpg";
import hh4 from "./assets/soa4.jpg";
import hh5 from "./assets/soa5.jpg";
import hh6 from "./assets/soa6.jpg";
import hh7 from "./assets/soa7.jpg";
import hh8 from "./assets/soa8.jpg";
import hh9 from "./assets/soa9.jpg";
import hh10 from "./assets/soa10.jpg";
import hh11 from "./assets/soa11.jpg";
import hh12 from "./assets/soa12.jpg";
import hh13 from "./assets/soa13.jpg";
import hh14 from "./assets/soa14.jpg";
import hh15 from "./assets/soa15.jpg";
import hh16 from "./assets/soa16.jpg";
import hh17 from "./assets/soa17.jpg";
import hh18 from "./assets/soa18.jpg";
import hh19 from "./assets/soa19.jpg";
import hh20 from "./assets/soa20.jpg";
import hh21 from "./assets/soa21.jpg";
import hh22 from "./assets/soa22.jpg";
import hh23 from "./assets/soa23.jpg";
import hh24 from "./assets/soa24.jpg";
import hh25 from "./assets/soa25.jpg";
import hh26 from "./assets/soa26.jpg";
import hh27 from "./assets/soa27.jpg";
import hh28 from "./assets/soa28.jpg";
import hh29 from "./assets/soa29.jpg";
import hh30 from "./assets/soa30.jpg";
import hh31 from "./assets/soa31.jpg";
import hh32 from "./assets/soa32.jpg";
import hh33 from "./assets/soa33.jpg";
import hh34 from "./assets/soa34.jpg";
import hh35 from "./assets/soa35.jpg";
import hh36 from "./assets/soa36.jpg";
import hh37 from "./assets/soa37.jpg";
import hh38 from "./assets/soa38.jpg";
import hh39 from "./assets/soa39.jpg";
import hh40 from "./assets/soa40.jpg";
function Categories() {
  return (
    <div className="container mt-4 ">
      <div>
        <h2 className="sh">
          Shop smarter. Shop faster. Shop better at Funmilayo Store 🛍️
        </h2>
      </div>
      <div className="offer">
        <h4>
          What are your Demands ? Scroll down to see more of what we've for you
          in Our Store
        </h4>
      </div>

      <div className="category-card text-center shadow p-4 rounded">
        <FaGlassWhiskey size={40} className="mb-3 text-success" />
        <h5>Beverages</h5>
        <p>
          Refreshing drinks to keep you energized and hydrated all day long.
        </p>
      </div>
      <div className=" category-card text-center shadow p-4 rounded">
        <GiMilkCarton size={40} className="mb-3 text-success" />
        <h5>Diary Products</h5>
        <p>Fresh and nutritious dairy essentials for a healthy lifestyle</p>
      </div>
      <div className=" category-card text-center shadow p-4 rounded">
        <FaCookieBite size={40} className="mb-3 text-success" />
        <h5>Snacks</h5>
        <p>Delicious treats and quick bites for every moment.</p>
      </div>
      <div className=" category-card text-center shadow p-4 rounded">
        <FaShoppingBasket size={40} className="mb-3 text-success" />
        <h5>Groceries</h5>
        <p>Daily food items and pantry staples for your cooking needs</p>
      </div>
      <div className=" category-card text-center shadow p-4 rounded">
        <GiChiliPepper size={40} className="mb-3 text-success" />
        <h5>Spices & Seasonings</h5>
        <p>Add rich flavor and aroma to your meals with quality </p>
      </div>
      <div className=" category-card text-center shadow p-4 rounded">
        <LuCupSoda size={40} className="mb-3 text-success" />
        <h5>Juices & Drinks</h5>
        <p>Sweet, fizzy, and fruity drinks for instant refreshment. </p>
      </div>
      <div className=" category-card text-center shadow p-4 rounded">
        <MdCleaningServices size={40} className="mb-3 text-success" />
        <h5>Household Items</h5>
        <p> Everything you need to keep your home clean and organized.</p>
      </div>
      <Row className="cat">
        {/* CARD 1 */}
        <Col md={3}>
          <Card
            title="BEVERAGES"
            description="Fresh Ones"
            images={[
              viva1,
              viva2,
              viva3,
              shop1,
              shop2,
              shop3,
              candy1,
              candy2,
              candy3,
              candy4,
              candy5,
              milk1,
              milk2,
              milk3,
              milk4,
              milk5,
              milk6,
              milk7,
              milk8,
              milk9,
              milk10,
              milk11,
              milk12,
              dia1,
              dia2,
              dia3,
              dia4,
              dia5,
              dia6,
              dia7,
              dia8,
              dia9,
              dia10,
              dia11,
              dia12,
              dia13,
              // dia14,
              dia15,
              dia16,
              dia17,
              dia18,
            ]}
          />
        </Col>

        {/* CARD 2 */}
        <Col md={3}>
          <Card
            title="SNACKS"
            description="Fresh Ones"
            images={[
              sna1,
              sna2,
              sna3,
              sna4,
              sna5,
              sna6,
              sna7,
              sna8,
              sna9,
              sna10,
              sna11,
              sna12,
              sna13,
              sna14,
              sna15,
              sna16,
              sna17,
              sna18,
              sna19,
              sna20,
              sna21,
              sna22,
              sna23,
              sna24,
              sna25,
              sna26,
              sna27,
              sna28,
              sna29,
              sna30,
              sna31,
              sna32,
              sna33,
              sna34,
              sna35,
              sna36,
              sna37,
              sna38,
              sna39,
              sna40,
              sna41,
              sna42,
              sna43,
              sna44,
              sna45,
              sna46,
            ]}
          />
        </Col>

        {/* CARD 3 */}
        <Col md={3}>
          <Card
            title="GROCERIES"
            description="Fresh Ones"
            images={[
              groc2,
              groc3,
              groc4,
              groc5,
              groc6,
              groc7,
              groc8,
              groc9,
              groc10,
              groc1,
              groc11,
              groc12,
              groc13,
              groc14,
              groc15,
              groc16,
              groc17,
              groc18,
              groc19,
              groc20,
              groc21,
              groc22,
              groc23,
              groc24,
              groc25,
              groc26,
              groc27,
              groc28,
              groc29,
              groc30,
              groc31,
            ]}
          />
        </Col>

        {/* CARD 4 */}
        <Col md={3}>
          <Card
            title="HH ESSENTIALS"
            description="Fresh Ones"
            images={[
              hh0,
              hh1,
              hh2,
              hh3,
              hh4,
              hh5,
              hh6,
              hh7,
              hh8,
              hh9,
              hh10,
              hh11,
              hh12,
              hh13,
              hh14,
              hh15,
              hh16,
              hh17,
              hh18,
              hh19,
              hh20,
              hh21,
              hh22,
              hh23,
              hh24,
              hh25,
              hh26,
              hh27,
              hh28,
              hh29,
              hh30,
              hh31,
              hh32,
              hh33,
              hh34,
              hh35,
              hh36,
              hh37,
              hh38,
              hh39,
              hh40,
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Categories;
