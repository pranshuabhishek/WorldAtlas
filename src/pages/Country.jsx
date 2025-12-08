import React from "react";

// import { useEffect, useState, useTransition } from "react";
// import { getCountryData } from "../api/postApi";
// import { Loader } from "../components/UI/Loader";
// import { CountryCard } from "../components/Layout/CountryCard";
// import { SearchFilter } from "../components/UI/SearchFilter";

// export const Country = () => {
//   const [isPending, startTransition] = useTransition();
//   const [countries, setCountries] = useState([]);

//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("all");

//   useEffect(() => {
//     startTransition(async () => {
//       const res = await getCountryData();
//       setCountries(res.data);
//     });
//   }, []);

//   if (isPending) return <Loader />;

//   // console.log(search, filter);

//   const searchCountry = (country) => {
//     if (search) {
//       return country.name.common.toLowerCase().includes(search.toLowerCase());
//     }
//     return country;
//   };

//   const filterRegion = (country) => {
//     if (filter === "all") return country;
//     return country.region === filter;
//   };

//   // here is the main logic
//   const filterCountries = countries.filter(
//     (country) => searchCountry(country) && filterRegion(country)
//   );

//   return (
//     <section className="country-section">
//       <SearchFilter
//         search={search}
//         setSearch={setSearch}
//         filter={filter}
//         setFilter={setFilter}
//         countries={countries}
//         setCountries={setCountries}
//       />

//       <ul className="grid grid-four-cols">
//         {filterCountries.map((curCountry, index) => {
//           return <CountryCard country={curCountry} key={index} />;
//         })}
//       </ul>
//     </section>
//   );
// };

import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader.jsx";
import { CountryCard } from "../components/Layout/CountryCard.jsx";
import { SearchFilter } from "../components/UI/SearchFilter.jsx";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Fetch API
  useEffect(() => {
    startTransition(() => {
      getCountryData().then((res) => {
        setCountries(res?.data ?? []);
      });
    });
  }, []);

  // Loader
  if (isPending) return <Loader />;

  // Search function
  const searchCountry = (country) => {
    if (!search) return true;
    return country?.name?.common
      ?.toLowerCase()
      .includes(search.toLowerCase());
  };

  // Filter region function
  const filterRegion = (country) => {
    if (filter === "all") return true;
    return country?.region === filter;
  };

  // Final filtered list
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => (
          <CountryCard country={curCountry} key={index} />
        ))}
      </ul>
    </section>
  );
};
