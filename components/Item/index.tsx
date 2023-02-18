import Image from 'next/image';
import Link from 'next/link';
import { imageLoader } from '../../pages/utils';
import { Game } from '../../types';
import styles from './item.module.scss';

interface GameProps {
  game: Game;
}

export default function Item({ game }: GameProps) {
  return (
    <Link passHref href={`/games/${game.id}`}>
      <div key={game.id.toString()} className={styles.Container}>
        <Image className={styles.Image} width={264} height={352} quality={60} src={game.cover.url.toString()} loader={imageLoader} alt={game.name.toString()} />
        <div className={styles.GameDescContainer}>
          <h3 className={styles.Title}>{game.name}</h3>
          <div className={styles.SummaryText}>{game.summary ? game.summary : 'No summary available'}</div>
          <div className={styles.InfoBox}>
            {/* <div className={styles.releaseDate}>{game.release_dates[0].human.split(',')[0]}</div> */}
            {game.genres ? (
              game.genres.map((g) => (
                <div key={g.id.toString()} className={styles.Genre}>
                  {g.name}
                </div>
              ))
            ) : (
              <div className={styles.Genre}>Unknown</div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
