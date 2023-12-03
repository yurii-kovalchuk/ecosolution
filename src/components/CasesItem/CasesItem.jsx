import PropTypes from "prop-types";
import ArrowIcon from "../../assets/media/icons/arrow-corner.svg?react";
import {
  CaseImg,
  CaseInfo,
  CaseTitleWrap,
  CaseTitle,
  CaseBtn,
  CaseDescriptWrap,
} from "./CasesItem.styled";

const CasesItem = ({ info }) => {
  const { img, description, title, data } = info;
  return (
    <div>
      <picture>
        <source
          media="(min-width: 768px) and (max-width:1279px)"
          srcSet={`${img[2]} 1x, ${img[3]} 2x,`}
        />
        <source
          media="(min-width: 1280px)"
          srcSet={`${img[4]} 1x, ${img[5]} 2x,`}
        />
        <CaseImg
          srcSet={`${img[0]} 1x, ${img[1]} 2x,`}
          src={`${img[0]}`}
          alt={description}
        />
      </picture>

      <CaseInfo>
        <CaseTitleWrap>
          <CaseTitle>{title}</CaseTitle>
          <CaseBtn>
            <ArrowIcon />
          </CaseBtn>
        </CaseTitleWrap>
        <CaseDescriptWrap>
          <span>{description}</span>
          <span>{data}</span>
        </CaseDescriptWrap>
      </CaseInfo>
    </div>
  );
};

CasesItem.propTypes = {
  info: PropTypes.exact({
    img: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.string,
  }),
};

export default CasesItem;
