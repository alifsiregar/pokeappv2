import PropTypes from "prop-types";
import TypeOne from "./type-1";
import TypeTwo from "./type-2";

const Template = [
  {
    id: "type-1",
    component: TypeOne,
  },
  {
    id: "type-2",
    component: TypeTwo,
  },
];

const Modal = ({ type, onClick }) =>
  Template.filter((item) => item.id === type).map((style, idx) => (
    <style.component key={String(idx)} type={type} onClick={() => onClick()} />
  ));

Modal.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Modal;
