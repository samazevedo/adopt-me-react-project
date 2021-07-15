import Pet from "./Pet";

const Results = ({ pets }) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h2>No Pets Found</h2>
            ) : (
                pets.map(pet => (
                    <Pet
                        animal={pet.animal}
                        key={animal}
                        name={pet.name}
                        breed={pet.breed}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        id={pet.id} />
                    // <Pet {...pet key={pet.id}}       <<< spread operator
                ))
            )}
        </div>

    );
}

export default Results;