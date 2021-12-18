import React, { useState } from 'react';
import { IonSearchbar, IonText } from '@ionic/react';

const Search = () => {
    const [search, setSearch] = useState<string>('');

    const handleSearch = (e: any) => {
        let searchValue = e.detail.value!;
        setSearch(searchValue);
    }
    return (
        <section className="search-prescription ion-margin-bottom">
            <IonText>Search for prescription</IonText>
            <IonSearchbar
                value={search}
                animated
                type="search"
                showCancelButton="never"
                showClearButton="always"
                autoCorrect="on"
                spellCheck={true}
                onIonChange={handleSearch} />
        </section>
    )
}

export default Search
