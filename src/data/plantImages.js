const plantImages = [
    {
        "commonName": "Wild Columbine",
        "scientificName": "Aquilegia canadensis",
        "image": "/plants/wild-columbine.jpg",
        "photographer": "Ragesoss",
        "license": "CC BY-SA 3.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Aquilegia_canadensis.jpg"
    },
    {
        "commonName": "New England Aster",
        "scientificName": "Symphyotrichum novae-angliae",
        "image": "/plants/new-england-aster.jpg",
        "photographer": "The Cosmonaut",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Symphyotrichum_novae-angliae3.jpg"
    },
    {
        "commonName": "Little Bluestem",
        "scientificName": "Schizachyrium scoparium",
        "image": "/plants/little-bluestem.jpg",
        "photographer": "Krzysztof Ziarnek",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Schizachyrium_scoparium_kz2.jpg"
    },
    {
        "commonName": "Swamp Milkweed",
        "scientificName": "Asclepias incarnata",
        "image": "/plants/swamp-milkweed.jpg",
        "photographer": "Photo by and (c)2007 Derek Ramsey (Ram-Man)",
        "license": "GFDL 1.2",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Swamp_Milkweed_Asclepias_incarnata_Insect_Feeding_3008px.jpg"
    },
    {
        "commonName": "Black-eyed Susan",
        "scientificName": "Rudbeckia hirta",
        "image": "/plants/black-eyed-susan.jpg",
        "photographer": "G. Edward Johnson",
        "license": "CC BY-SA 3.0",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Black_eyed_susan_20040717_110754_2.1474.jpg"
    },
    {
        "commonName": "Inkberry Holly",
        "scientificName": "Ilex glabra",
        "image": "/plants/inkberry-holly.jpg",
        "photographer": "Photo by David J. Stang",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/4/40/Ilex_glabra_Squat_1zz.jpg"
    },
    {
        "commonName": "Wild Bergamot",
        "scientificName": "Monarda fistulosa",
        "image": "/plants/wild-bergamot.jpg",
        "photographer": "Jasper Shide",
        "license": "CC0",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Monarda_fistulosa_-_Wild_Bergamot_%28Flower%29.jpg"
    },
    {
        "commonName": "Winterberry Holly",
        "scientificName": "Ilex verticillata",
        "image": "/plants/winterberry-holly.jpg",
        "photographer": "Agnieszka Kwiecień",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/0/05/Ilex_verticillata_Ostrokrzew_ok%C3%B3%C5%82kowy_2021-10-16_01.jpg"
    },
    {
        "commonName": "Northern Spicebush",
        "scientificName": "Lindera benzoin",
        "image": "/plants/northern-spicebush.jpg",
        "photographer": "R. A. Nonenmacher",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lindera_benzoin_01469.jpg"
    },
    {
        "commonName": "Switchgrass",
        "scientificName": "Panicum virgatum",
        "image": "/plants/switchgrass.jpg",
        "photographer": "Photo by David J. Stang",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/3/38/Panicum_virgatum_Rotstrahlbusch_3zz.jpg"
    },
    {
        "commonName": "Purple Coneflower",
        "scientificName": "Echinacea purpurea",
        "image": "/plants/purple-coneflower.jpg",
        "photographer": "Rhododendrites",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/2/29/American_lady_on_purple_coneflower_%2874770%29.jpg"
    },
    {
        "commonName": "Blue Vervain",
        "scientificName": "Verbena hastata",
        "image": "/plants/blue-vervain.jpg",
        "photographer": "Dominicus Johannes Bergsma",
        "license": "CC BY-SA 3.0",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/5/58/Verbena_hastata_%27Rosea%27.JPG"
    },
    {
        "commonName": "Culver's Root",
        "scientificName": "Veronicastrum virginicum",
        "image": "/plants/culvers-root.jpg",
        "photographer": "KATHERINE WAGNER-REISS",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Veronicastrum_virginicum_%27Adoration%27_with_and_without_fasciation.jpg"
    },
    {
        "commonName": "Virginia Rose",
        "scientificName": "Rosa virginiana",
        "image": "/plants/virginia-rose.jpg",
        "photographer": "magnolia1000 from Canada",
        "license": "CC BY-SA 2.0",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Rosa_virginiana_Nova_Scotia.jpg"
    },
    {
        "commonName": "Witch Hazel",
        "scientificName": "Hamamelis virginiana",
        "image": "/plants/witch-hazel.jpg",
        "photographer": "Micki Colbeck (@mickicolbeck)",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/1/11/Hamamelis_virginiana_Vermont_USA_2023-10-01.jpg"
    },
    {
        "commonName": "Mountain Laurel",
        "scientificName": "Kalmia latifolia",
        "image": "/plants/mountain-laurel.jpg",
        "photographer": "Photo by and (c)2007 Derek Ramsey (Ram-Man)",
        "license": "GFDL 1.2",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/9/95/Mountain_Laurel_Kalmia_latifolia_Flowers_2448px.jpg"
    },
    {
        "commonName": "Seaside Goldenrod",
        "scientificName": "Solidago sempervirens",
        "image": "/plants/seaside-goldenrod.jpg",
        "photographer": "Cephas",
        "license": "CC BY-SA 4.0",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Solidago_sempervirens_Bic_03.jpg"
    },
    {
        "commonName": "Nodding Onion",
        "scientificName": "Allium cernuum",
        "image": "/plants/nodding-onion.jpg",
        "photographer": "ghislain118 http://www.fleurs-des-montagnes.net",
        "license": "CC BY-SA 3.0",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Allium_cernuum_1.jpg"
    },
    {
        "commonName": "Virginia Bluebells",
        "scientificName": "Mertensia virginica",
        "image": "/plants/virginia-bluebells.jpg",
        "photographer": "Khan 'Sadh' N. Mostafa",
        "license": "CC BY 2.0",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/3/31/Mertensia_virginica.bbg.jpg"
    },
    {
        "commonName": "Joe-Pye Weed",
        "scientificName": "Eutrochium purpureum",
        "image": "/plants/joe-pye-weed.jpg",
        "photographer": "Mick Lobb / Red Admiral feeding on Eupatorium purpureum - Aberglasney",
        "license": "CC BY 3.0",
        "sourceUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Red_Admiral_feeding_on_Eupatorium_purpureum_-_Aberglasney_-_geograph.org.uk_-_1484366.jpg"
    }



];
export default plantImages;

/**
 * Look up image metadata for a plant.
 * Matches by scientificName first, then by commonName (case-insensitive).
 */
export function getPlantImage(plant) {
    if (!plant) return null;

    const bySci = plantImages.find(
        (p) => p.scientificName?.toLowerCase() === plant.scientificName?.toLowerCase()
    );

    if (bySci) return bySci;

    const byName = plantImages.find(
        (p) => p.commonName?.toLowerCase() === plant.commonName?.toLowerCase()
    );

    return byName || null;
}