import Item from '../Item';
import { Game } from '../../types';

interface GameProps {
  data: Game[];
}

export default function Grid({ data }: GameProps) {
  return (
    <div>
      {data.map((game: Game) => (
        <Item key={game.id} data={game} />
      ))}
    </div>
  );
}
