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


const Modal = ({
	type,
  onClick,
}) => (
	Template.filter((item) => item.id === type).map((style, idx) => (
		<style.component
			key={String(idx)}
			type={type}
      onClick={() => onClick()}
		/>
	))
);

export default Modal;