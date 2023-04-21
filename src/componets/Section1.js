import React from "react";
import img from "../img/se1.jpg";
import img1 from "../img/se2.jpg";
import img2 from "../img/se3.jpg";
function Section1() {
  return (
    <>
      <div className="section">
        <div className="paras">
          <p className="sectiontag text-big">
            Diven Darshan of prhlad maharaj and ugarh narsingha
          </p>
          <p className="sectionsubtag text-small">
            Lord Narasimha is the half-man half-lion incarnation of Lord Krishna
            who appeared to protect his young devotee Prahlada from his envious
            and atheistic demoniac father, Hiranyakashipu. sri-narasimha, jaya
            narasimha, jaya jaya narasimha prahladesa jaya
            padma-mukha-padma-bhrnga All glories to Lord Narasimhadeva! All
            glories to Lord Narasimhadeva, who is the Lord of Prahlada Maharaja
            and, like the honeybee, is always engaged in beholding the
            lotus-like face of the goddess of fortune.
          </p>
        </div>
        <div className="thumbnail">
          <img src={img} alt="imgage" className="imgfluid" />
        </div>
      </div>
      <div className="section left">
        <div className="paras">
          <p className="sectiontag text-big">
            ISKCON Founder Aacharya:His Divine Grace A.C Bhativedant Swami
            Shrill Parbhupad
          </p>
          <p className="sectionsubtag text-small">
            Srila Prabhupada is the Founder-Acharya of International Society for
            Krishna Consciousness (ISKCON) which brought a spiritual dimension
            to the lives of thousands of his followers. He was a rare
            personality who appeared on the earth and dedicated his life to
            spreading God consciousness all over the world. The scriptures
            recommend the chanting of the holy name of Lord Krishna (Harinama
            sankirtan) as the devotional practice best suited for the present
            age for spiritual perfection. Sri Chaitanya Mahaprabhu who appeared
            over 500 years ago in West Bengal, India was the greatest exponent
            of this method. He predicted that His message will be carried to
            every town and village of this world by a powerful spiritual
            ambassador. The life and activities of Srila Prabhupada prove beyond
            doubt that he was the empowered personality who appeared to fulfil
            this prediction.
          </p>
        </div>
        <div className="thumbnail">
          <img src={img2} alt="imgage" className="imgfluid" />
        </div>
      </div>
      <div className="section">
        <div className="paras">
          <p className="sectiontag text-big">
            His Holyness jay pataka Swami Maharaj ki jay
          </p>
          <p className="sectionsubtag text-small">
            Jayapataka Swami was born John Gordan Erdman on April 9, 1949 (the
            ekadasi after ramanavami) in Milwaukee, Wisconsin, USA to John
            Hubert and Lorraine Erdman. He was born into opulent surroundings,
            his father’s father being the founder of a large paint factory,
            which was a multi-million dollar concern at the time of his birth.
            Later HH Jayapataka Swami Maharaja was glad to see that his name –
            Gordan John (Gour Dhan Jan) – already suggested what Srila
            Prabhuapda confirmed, that he and two other devotees were formerly
            associates of Lord Caitanya and that they had taken their birth in
            the west to facilitate spreading Krishna consciousness around the
            world “I went to your country with a mission and you all good souls
            were sent by Krishna to me.” – Srila Prabhupada. One of the good
            souls sent by Krishna to Srila Prabhupada is His Holiness Jayapataka
            Swami Maharaja who has been serving Srila Prabhupada as a “selfless
            worker” over the last 3 decades.
          </p>
        </div>
        <div className="thumbnail">
          <img src={img1} alt="imgage" className="imgfluid" />
        </div>
      </div>
    </>
  );
}

export default Section1;
