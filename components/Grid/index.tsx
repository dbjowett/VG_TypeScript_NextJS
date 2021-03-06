import Item from '../Item';
import { Game } from '../../types';
import styles from './grid.module.css';

interface Props {
  games: Game[];
}

export default function Grid({ games }: Props) {
  return (
    <div className={styles.gridContainer}>
      {games.map((game: Game) => (
        <Item key={game.id.toString()} game={game} />
      ))}
    </div>
  );
}
