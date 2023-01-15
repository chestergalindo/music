import type { IArtistImage } from './index.d';
//TODO: pendiente de refactorizar
export const validateProps = (props: IArtistImage) =>{
  if (typeof props.isCircle !== "boolean") {
    console.log(`La variable isCircle no es de tipo boolean`);
  }
  if (typeof props.name !== "string") {
    console.log(`La variable name no es de tipo string`);
  }
  if (typeof props.image !== "string") {
    console.log(`La variable image no es de tipo string`);
  }
  if (typeof props.id !== "number") {
    console.log(`La variable id no es de tipo number`);
  }
  if (typeof props.alt !== "string") {
    console.log(`La variable alt no es de tipo string`);
  }
  if (typeof props.popularity !== "number") {
    console.log(`La variable popularity no es de tipo number`);
  }
}