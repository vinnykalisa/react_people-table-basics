import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Person } from '../../types';

interface Props {
  person: Person;
}

export const PersonLink: React.FC<Props> = ({ person }) => {
  const { slug, sex, name } = person;

  return (
    <Link
      to={`/people/${slug}`}
      className={classNames({
        'has-text-danger': sex === 'f',
      })}
    >
      {name}
    </Link>
)};