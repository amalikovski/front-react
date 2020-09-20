import React, { useState, useEffect } from 'react';

import { doGet, getIdFromUrl } from '../../helpers/ApiHelper';

import { Link } from 'react-router-dom';

export default function Home() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        doGet('/people').then(response => setPeople(response.results));
    }, []);

    if (!people || !people.length) {
        return <h1>Loading....</h1>;
    }

    const peopleList = people.map(p => {
        const id = getIdFromUrl(p.url);

        return (
            <li key={p.url}>
                <Link to={`/detail/${id}`}>{p.name}</Link></li>

        );
    });

    return (
        <>
            <h1>Pessoas</h1>
            <h2>{peopleList}</h2>
        </>
    );

}
