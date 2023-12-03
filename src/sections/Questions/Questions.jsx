import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import questionData from "../../assets/data/FAQ.json";
import MinusIcon from "../../assets/media/icons/minus.svg?react";
import PlusIcon from "../../assets/media/icons/plus.svg?react";
import ArrowDownIcon from "../../assets/media/icons/arr-down.svg?react";
import {
  Answer,
  Question,
  QuestItem,
  QuestTitle,
  ContactUsLink,
  ContactUsTxt,
  ContactUsWrap,
  QuestList,
  QuestContainer,
  QuestCustom,
  ContactUsQuest,
} from "./Questions.styled";
import scroolToSection from "../../utils/scrollToSection";

const Questions = () => {
  const [selected, setSelected] = useState(0);
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const handleClick = (id, evt) => {
    evt.preventDefault();
    scroolToSection(id);
  };

  return (
    <section id="faq">
      <QuestContainer>
        {!isTablet && <QuestTitle>Frequently Asked Questions</QuestTitle>}

        <QuestList>
          {questionData.map((data, idx) => {
            const isActive = selected === idx;
            return (
              <QuestItem key={idx}>
                <Question onClick={() => setSelected(idx)}>
                  {isActive ? <MinusIcon /> : <PlusIcon />}
                  <h4>{data.question}</h4>
                </Question>
                <Answer $isActive={isActive}>
                  <p>{data.answer}</p>
                </Answer>
              </QuestItem>
            );
          })}
        </QuestList>
        <QuestCustom>
          {isTablet && <QuestTitle>Frequently Asked Questions</QuestTitle>}

          <ContactUsWrap>
            <ContactUsQuest>
              Didn&apos;t find the answer to your question?
            </ContactUsQuest>
            <ContactUsLink
              href="/"
              onClick={(evt) => handleClick("contact-us", evt)}
            >
              <ContactUsTxt>Contact Us</ContactUsTxt>
              <ArrowDownIcon />
            </ContactUsLink>
          </ContactUsWrap>
        </QuestCustom>
      </QuestContainer>
    </section>
  );
};

export default Questions;
