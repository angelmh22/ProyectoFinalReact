/* eslint-disable no-underscore-dangle */
/* eslint-disable react/react-in-jsx-scope */
import { useParams } from 'react-router-dom';
import { getInvoices } from '../../services/datos';

export default function Personaje() {
  const params = useParams();
  const character = getInvoices(parseInt(params.invoiceId, 10));
  return (
    <main>
      <h2>
        Total Due:
        {' '}
        {character._id}
      </h2>
      <p>
        {character.name}
        :
        {' '}
        {character.imageUrl}
      </p>
      <p>
        Due Date:
        {' '}
        {character._id}
      </p>
    </main>
  );
}
