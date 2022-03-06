import { Game } from '../../types';

interface GameProps {
  data: Game;
}

export default function Item({ data }: GameProps) {
  console.log(data);
  return <div>{data.name}</div>;
}
