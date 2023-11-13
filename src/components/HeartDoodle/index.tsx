import { useContext } from 'react';
import { AppContext } from '@context';
import { Answers } from '@types';
import Image from 'next/image';
import heartDoodle from '@public/noun-heart-doodle-335497.svg';
import styles from '@styles/HeartDoodle.module.scss';

const HeartDoodle = () => {

const { selectedAnswer } = useContext(AppContext)

const doodleColor = () => (selectedAnswer === Answers.YES) ? 'red' : (selectedAnswer === Answers.NO) ? 'blue' : (selectedAnswer === Answers.MAYBE) ? 'purple' : ''

  return (
    <Image
      className={styles.heartDoodle}
      src={heartDoodle}
      alt="heartDoodle"
      style={{backgroundColor: doodleColor()}}
    />
  );
};

export default HeartDoodle;
