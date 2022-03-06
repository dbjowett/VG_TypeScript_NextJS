import Image from 'next/image';
import Link from 'next/link';
import { Game } from '../../types';
import styles from './item.module.css';

interface GameProps {
  game: Game;
}

export default function Item({ game }: GameProps) {
  const cover = game.cover
    ? game.cover.url.replace('t_thumb', 't_cover_big')
    : '//www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';
  return (
    <Link passHref href={`/games/${game.id}`}>
      <div key={game.id.toString()} className={styles.gameItem}>
        {/* <img className={styles.gamePhoto} src={cover} alt={game.name} /> */}
        <Image width='250px' height='250px' src={'https:' + cover} alt={game.name.toString()} objectFit='cover' />
        <div className={styles.gameDesc}>
          <h3 className={styles.gameName}>{game.name}</h3>
          <div className={styles.summary}>
            {game.summary ? game.summary.slice(0, 147) : 'No summary available'}
            ...
          </div>
          <div className={styles.gameInfoBox}>
            <div className={styles.releaseDate}>{game.release_dates[0].human.split(',')[0]}</div>
            {game.genres ? <div className={styles.releaseDate}>{game.genres[0].name}</div> : <div className={styles.releaseDate}>Unknown</div>}
          </div>
        </div>
      </div>
    </Link>
  );
}
