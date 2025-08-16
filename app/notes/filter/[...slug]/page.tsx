import NoteList from '@/components/NoteList/NoteList';
import { fetchNotes} from '@/lib/api';
import React from 'react';
import NotesClient from './Notes.client';

type Props = {
    params: Promise <{slug: string[]}>
}

const NotesByCategory = async ({
    params
}: Props) => {
    const { slug } = await params;
    const tag = slug[0] === 'All' ? undefined : slug[0]
    const response = await fetchNotes(1, 12, '', tag);
  return (
    <div>
                <h1>{tag}</h1>
      {response?.notes?.length > 0 && <NotesClient initialData={response} tagId={ tag} />}
    </div>
  );
};

export default NotesByCategory;