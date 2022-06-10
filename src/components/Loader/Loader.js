import { TailSpin } from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.frame}>
      <TailSpin color="#00BFFF" height={60} width={60} />
    </div>
  );
}
