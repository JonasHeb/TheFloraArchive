const data_unfiltered = [
  {Nr: 1, common_name: "Spanish flag", scientific_name: "Lantana camara", drawing: "https://i.postimg.cc/85nRvNzH/lantana-camara.png", mainspecies: "Verbenaceae", Type: "Shrub", height: "60 cm to 180 cm", flowering_time: "may, jun, jul, aug, sep, oct", region: "Central and South America", climate: "10 to 11", Exposure: "full sun ", Water: "low, average", soil: "chalk, clay, loam, sand", evergreen: "Deciduous", toxicity: "toxic", attracts: "bees, butterflies, hummingbirds", System: "intensive", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/LantanaFlowerLeaves.jpg/1000px-LantanaFlowerLeaves.jpg"},
  {Nr: 2, common_name: "African Lily", scientific_name: "Agapanthus africanus", drawing: "https://i.postimg.cc/tJKFrkPn/agapanthus-africanus.png", mainspecies: "Amaryllidaceae", Type: "Forb/Herb", height: "60 cm to 90 cm", flowering_time: "jun, jul, aug", region: "Southern Africa", climate: "1 to 12", Exposure: "full sun, partial sun ", Water: "average", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "toxic", attracts: "birds, bees, butterflies, hummingbirds ", System: "intensive ", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Agapanthus_africanus_in_habitat_photo_Nick_Helme_CC_by_SA.jpg/1000px-Agapanthus_africanus_in_habitat_photo_Nick_Helme_CC_by_SA.jpg"},
  {Nr: 3, common_name: "Snowy Mespilus", scientific_name: "Amelanchier ovalis", drawing: "https://i.postimg.cc/DyGrWVkr/amelanchier-ovalis.png", mainspecies: "Rosaceae", Type: "Shrub / Tree", height: "4.6 m to 6.1 m", flowering_time: "apr, may ", region: "Central and Southern Europe, Northern Africa, Middle East", climate: "", Exposure: "full sun, partial sun ", Water: "average", soil: "Graminoid", evergreen: "Deciduous", toxicity: "not toxic", attracts: "birds, bees ", System: "intensive ", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Amelanchier_ovalis01.jpg/1000px-Amelanchier_ovalis01.jpg"},
  {Nr: 4, common_name: "Papyrus Plant", scientific_name: "Cyperus papyrus", drawing: "https://i.postimg.cc/t4tF5hg7/cyperus-papyrus.png", mainspecies: "Cyperaceae", Type: "Graminoid", height: "60 cm to 150 cm", flowering_time: "", region: "Africa", climate: "6 to 12", Exposure: "full sun, partial sun", Water: "high", soil: "wet chalk, clay, loam, sand", evergreen: "Deciduous", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Papyrus_%28Cyperus_papyrus%29_%287079191471%29.jpg/1000px-Papyrus_%28Cyperus_papyrus%29_%287079191471%29.jpg"},
  {Nr: 5, common_name: "Surinam Cherry", scientific_name: "Eugenia uniflora", drawing: "https://i.postimg.cc/CKc6xR9r/eugenia-uniflora.png", mainspecies: "Myrtaceae", Type: "Shrub / Tree", height: "5 m to 7 m ", flowering_time: "mar, apr", region: "Southern America", climate: "", Exposure: "full sun", Water: "average", soil: "", evergreen: "Evergreen", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Eugenia_uniflora_fruits.jpg/1000px-Eugenia_uniflora_fruits.jpg"},
  {Nr: 6, common_name: "Jasmine", scientific_name: "Jasminum officinale", drawing: "https://i.postimg.cc/NMVJRWs1/jasminum.png", mainspecies: "Oleaceae", Type: "Shrub / Vine", height: "4.5 m to 9 m", flowering_time: "jun, jul, aug, sep", region: "Asia", climate: "8 to 12", Exposure: "full sun, partial sun ", Water: "average", soil: "chalk, clay, loam, sand", evergreen: "Deciduous", toxicity: "non toxic", attracts: "butterflies, hummingbirds ", System: "intensive ", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Jasminum_officinale_-_Bot._Mag._31%2C_1787.jpg"},
  {Nr: 7, common_name: "Laurustinus", scientific_name: "Viburnum tinus", drawing: "https://i.postimg.cc/2yZHG2yg/laurustinus.png", mainspecies: "Adoxaceae", Type: "Shrub", height: "180 cm to 3.7 m", flowering_time: "mar, apr ", region: "Mediterranean region, Northern Africa, Canary Islands, Viburnum", climate: "8 to 10", Exposure: "full sun, partial sun", Water: "average", soil: "chalk, clay, loam, sand", evergreen: "Evergreen", toxicity: "not highly toxic ", attracts: "birds, bees, butterflies ", System: "intensive", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Viburnum_tinus00.jpg"},
  {Nr: 8, common_name: "English Lavender", scientific_name: "Lavandula Angustifolia", drawing: "https://i.postimg.cc/T2zN1MHx/lavandula-angustifolia.png", mainspecies: "Lamiaceae", Type: "Subshrub", height: "30 cm to 90 cm", flowering_time: "may, jun, jul", region: "Mediterranean region", climate: "5 to 8", Exposure: "full sun", Water: "low", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "not toxic", attracts: "bees, butterflies ", System: "intensive ", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/4/40/Lavandula_angustifolia_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-087.jpg"},
  {Nr: 9, common_name: "Ox-eye Daisy", scientific_name: "Leucanthemum vulgare", drawing: "https://i.postimg.cc/CxNccZMM/leucanthemum-vulgare.png", mainspecies: "Compositae", Type: "Forb/Herb", height: "30 cm to 60 cm", flowering_time: "may, jun, jul, aug", region: "British Isles, Europe, Northern Asia", climate: " 1 to 8", Exposure: "full sun, partial sun ", Water: "average", soil: "chalk, clay, loam, sand", evergreen: "Deciduous", toxicity: "not toxic", attracts: "butterflies ", System: "intensive", Reference: "The Greenest of the Green block, Helsinki, Finland", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg/1000px-Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg"},
  {Nr: 10, common_name: "Common Myrtle", scientific_name: "Myrtus communis", drawing: "https://i.postimg.cc/0NXcqLJL/myrtus-communis.png", mainspecies: "Myrtaceae", Type: "Shrub", height: "2.4 m to 3.7 m", flowering_time: "may, jun, jul, aug", region: "Mediterranean region", climate: "8 to 9", Exposure: "full sun ", Water: "low, average", soil: "chalk, clay, loam, sand", evergreen: "Evergreen", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Myrtus_communis_L._subsp._communis_-_52505075873.png/1000px-Myrtus_communis_L._subsp._communis_-_52505075873.png"},
  {Nr: 11, common_name: "Fameflower", scientific_name: "Petrorhagia", drawing: "https://i.postimg.cc/PxByCYyy/petrorhagia.png", mainspecies: "Caryophyllaceae", Type: "Forb/Herb", height: "20 cm to 40 cm", flowering_time: "jun, jul, aug, sep", region: "Europe, Northern Africa", climate: "", Exposure: "full sun", Water: "low ", soil: "chalk, clay, loam, sand", evergreen: "Deciduous", toxicity: "not toxic", attracts: "bees", System: "extensive", Reference: "DESY HALLE 36, Hamburg, Germany; Warenlager der Friedrich Lütvogt GmbH & Co. KG, Wagenfeld, Germany", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Petrorhagia_saxifraga.jpg/1000px-Petrorhagia_saxifraga.jpg"},
  {Nr: 12, common_name: "Jerusalem Sage", scientific_name: "Phlomis fructicosa", drawing: "https://i.postimg.cc/2S2x4PTV/phlomis-fructicosa.png", mainspecies: "Lamiaceae", Type: "Shrub", height: "60 cm to 120 cm", flowering_time: "jun, jul", region: "Albania, Cyprus, Greece, Italy, Turkey", climate: "8 to 9", Exposure: "full sun", Water: "low, average", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "not toxic", attracts: "birds, butterflies", System: "intensive", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/0_Phlomis_fruticosa_-_Samo%C3%ABns_%282%29.JPG/1000px-0_Phlomis_fruticosa_-_Samo%C3%ABns_%282%29.JPG"},
  {Nr: 13, common_name: "Mastic Tree", scientific_name: "Pistacia lentiscus", drawing: "https://i.postimg.cc/gjFyzdcB/pistacia-lentiscus.png", mainspecies: "Anacardiaceae", Type: "Shrub", height: "4.6 m to 7.6 m", flowering_time: "mar, apr, may, jun", region: "Mediterranean region, Spain, France, Portugal, Greece, Turkey, Africa", climate: "9 to 12", Exposure: "full sun", Water: "low ", soil: "loam, sand", evergreen: "Evergreen", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Pistacia_lentiscus.jpg/1000px-Pistacia_lentiscus.jpg"},
  {Nr: 14, common_name: "Firecracker Plant", scientific_name: "Russelia equisetiformis", drawing: "https://i.postimg.cc/MKY0ShCd/russelia-equisetiformis.png", mainspecies: "Plantaginaceae", Type: "Forb/Herb", height: "90 cm to 180 cm", flowering_time: "may, jun, jul, aug, sep, oct", region: "Mediterranean region", climate: "", Exposure: "full sun, partial sun", Water: "average", soil: "chalk, clay, loam, sand", evergreen: "Evergreen", toxicity: "not toxic", attracts: "butterflies, hummingbirds ", System: "intensive", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Alcasar_russelia.JPG/1000px-Alcasar_russelia.JPG"},
  {Nr: 15, common_name: "Fringed Rue", scientific_name: "Ruta chalepensis", drawing: "https://i.postimg.cc/sg6pB5DW/ruta-chalepensis.png", mainspecies: "Rutaceae", Type: "Forb/Herb", height: "30 cm to 90 cm", flowering_time: "apr, may, jun", region: "Mediterranean region", climate: "", Exposure: "full sun", Water: "low", soil: "loam, sand", evergreen: "Evergreen", toxicity: "toxic if ingested", attracts: "", System: "extensive", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Ruta_chalepensis_ce.JPG/1000px-Ruta_chalepensis_ce.JPG"},
  {Nr: 16, common_name: "Common Sage", scientific_name: "Salvia officinalis", drawing: "https://i.postimg.cc/YSvQQjhs/salvia-officinalis.png", mainspecies: "Lamiaceae", Type: "Subshrub", height: "30 cm to 60 cm", flowering_time: "may, jun, jul", region: "Mediterranean region", climate: " 1 to 10", Exposure: "full sun", Water: "average", soil: "clay, loam", evergreen: "Evergreen", toxicity: "not toxic", attracts: "bees, butterflies, hummingbirds", System: "intensive", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Salvia_officinalis0.jpg"},
  {Nr: 17, common_name: "Spanish Broom", scientific_name: "Spartium junceum", drawing: "https://i.postimg.cc/d0gr6vCt/spartium-junceum.png", mainspecies: "Leguminosae", Type: "Shrub", height: "180 cm to 3 m", flowering_time: "jun", region: "Mediterranean region, Canary Islands", climate: "8 to 12", Exposure: "full sun", Water: "low", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "toxic", attracts: "", System: "intensive", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Spartium_junceum_%28habitus%29.jpg/1000px-Spartium_junceum_%28habitus%29.jpg"},
  {Nr: 18, common_name: "Society Garlic", scientific_name: "Tulbaghia violacea", drawing: "https://i.postimg.cc/3Rppb6jj/tulbaghia-violacea.png", mainspecies: "Amaryllidaceae", Type: "Forb/Herb", height: "30 cm to 60 cm", flowering_time: "aug, sep ", region: "Southern Africa, Mediterranean region", climate: "7 to 10", Exposure: "full sun", Water: "average", soil: "loam, sand", evergreen: "Deciduous", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Tulbaghia_%28Society_Garlic%29.jpg"},
  {Nr: 19, common_name: "Common Grape Vine", scientific_name: "Vitis vinifera", drawing: "https://i.postimg.cc/BZTHTrn4/vitis-vinifera.png", mainspecies: "Vitaceae", Type: "Vine", height: "12.2 m to 18.3 m", flowering_time: "jun, jul, aug", region: "Mediterranean region", climate: "6 to 9", Exposure: "full sun, partial sun", Water: "average", soil: "chalk, clay, loam, sand", evergreen: "Deciduous", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Cabernet_Sauvignon_Gaillac.jpg"},
  {Nr: 20, common_name: "Calla Lily", scientific_name: "Zantedeschia", drawing: "https://i.postimg.cc/1zVNfTdx/zantedeschia.png", mainspecies: "Araceae", Type: "Forb/Herb", height: "30 cm to 90 cm", flowering_time: "jan, feb, mar, apr, may", region: "Southern Africa, California, Australia, New Zealand", climate: "4 to 10", Exposure: "full sun, partial sun", Water: "average", soil: "clay, loam", evergreen: "Deciduous", toxicity: "toxic if ingested", attracts: "", System: "intensive", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Zantedeschia_-_Calla_Lilly2.jpg"},
  {Nr: 21, common_name: "Mugwort", scientific_name: "Artemisia  vulgaris", drawing: "https://i.postimg.cc/1XB8kZ8F/beifuss.png", mainspecies: "Artemisia", Type: "Forb/Herb", height: "50 cm to 150 cm", flowering_time: "jul, aug, sep", region: "Europe, Asia", climate: "4 to 9", Exposure: "full sun, partial sun", Water: "low, average", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "Valletta Design Cluster, Malta; High Line, New York", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ArtemisiaVulgaris.jpg/1000px-ArtemisiaVulgaris.jpg"},
  {Nr: 22, common_name: "Golden Sedum", scientific_name: "Sedum acre", drawing: "https://i.postimg.cc/c4DKT0yy/goldenefetthenne.png", mainspecies: "Crassulaceae", Type: "Forb/Herb", height: "8 cm", flowering_time: "may, jun", region: "Europe, Africa, Turkey", climate: "1 to 8", Exposure: "full sun", Water: "low ", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "not toxic", attracts: "", System: "extensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Sedum_acre_single_-_Niitv%C3%A4lja.jpg/1000px-Sedum_acre_single_-_Niitv%C3%A4lja.jpg"},
  {Nr: 23, common_name: "Raspberry", scientific_name: "Rubus idaeus", drawing: "https://i.postimg.cc/9f6qkx2t/rubus-idaeus.png", mainspecies: "Rosaceae", Type: "Shrub", height: "90 cm to 120 cm", flowering_time: "may, jun", region: "Europe, Northern Asia", climate: "", Exposure: "full sun, partial sun", Water: "average", soil: "loam, sand", evergreen: "Deciduous", toxicity: "not toxic", attracts: "birds, butterflies", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Fert%C5%91di_k%C3%A1rmin_m%C3%A1lna.JPG/1000px-Fert%C5%91di_k%C3%A1rmin_m%C3%A1lna.JPG"},
  {Nr: 24, common_name: "Bird's-foot Trefoil", scientific_name: "Lotus corniculatus", drawing: "https://i.postimg.cc/Z52WtH5w/hornklee.png", mainspecies: "Fabaceae", Type: "Forb/Herb", height: "10 cm to 30 cm", flowering_time: "may, jun, jul, aug, sep", region: "Germany, Austria", climate: "", Exposure: "full sun", Water: "average", soil: "loam, sand", evergreen: "Evergreen", toxicity: "low toxic", attracts: "bees, butterflies ", System: "extensive", Reference: "The Greenest of the Green block, Helsinki, Finland,  Warenlager der Friedrich Lütvogt GmbH & Co. KG, Wagenfeld, Germany", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/%28MHNT%29_Lotus_corniculatus_-_Plant_habit.jpg/1000px-%28MHNT%29_Lotus_corniculatus_-_Plant_habit.jpg"},
  {Nr: 25, common_name: "Rosemary", scientific_name: "Salvia rosmarinus", drawing: "https://i.postimg.cc/q7KzkKt4/rosmarin.png", mainspecies: "Lamiaceae", Type: "Subshrub", height: "90 cm to 120 cm", flowering_time: "mar, apr ", region: "Mediterranean region", climate: "8 to 12", Exposure: "full sun", Water: "low ", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "not toxic", attracts: "bees, butterflies, hummingbirds", System: "intensive", Reference: "Valletta Design Cluster, Malta", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Rosemary_in_bloom.JPG/1000px-Rosemary_in_bloom.JPG"},
  {Nr: 26, common_name: "Wild Thyme", scientific_name: "Thymus serpyllum", drawing: "https://i.postimg.cc/BnW5MTrh/thymus-serpyllum.png", mainspecies: "Lamiaceae", Type: "Subshrub", height: "3 cm to 8 cm", flowering_time: "jun, jul, aug", region: "Northern Europe, Western Asia, North Africa", climate: "1 to 9", Exposure: "full sun", Water: "low", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "not toxic", attracts: "bees, butterflies ", System: "extensive", Reference: "DESY HALLE 36, Hamburg, Germany", image_url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Thymus_serpyllum1.jpg"},
  {Nr: 27, common_name: "Silver Grass", scientific_name: "Corynephorus canescens", drawing: "https://i.postimg.cc/W3V1rxjK/corynephorus-canescens.png", mainspecies: "Poaceae", Type: "Graminoid", height: "15 cm to 30 cm", flowering_time: "jun, jul, aug", region: "Europe, the Middle East, Northern Africa", climate: "5 to 9", Exposure: "full sun ", Water: "low ", soil: "chalk, loam, sand", evergreen: "Deciduous", toxicity: "not toxic", attracts: "butterflies ", System: "extensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Silbergras2.jpg/1000px-Silbergras2.jpg"},
  {Nr: 28, common_name: "Sticky Catchfly", scientific_name: "Silene Viscaria", drawing: "https://i.postimg.cc/Df6mynzJ/sticky-catchfly.png", mainspecies: "Caryophyllaceae", Type: "Forb/Herb", height: "30 cm to 60 cm", flowering_time: "may, jun, jul", region: "Europe, Turkey, United States", climate: "", Exposure: "full sun", Water: "average", soil: "sand", evergreen: "Evergreen", toxicity: "not toxic", attracts: "bees", System: "intensive", Reference: "The Greenest of the Green block, Helsinki, Finland", image_url: "https://upload.wikimedia.org/wikipedia/commons/5/58/Lychnis_viscaria1.jpg"},
  {Nr: 29, common_name: "White Stonecrop", scientific_name: "Sedum album", drawing: "https://i.postimg.cc/Fs6FGYN0/sedum-album.png", mainspecies: "Crassulaceae", Type: "Forb/Herb", height: "8 cm to 15 cm", flowering_time: "jun, jul, aug", region: "Europe, Siberia, Western Asia, Northern Africa", climate: "9 to 11", Exposure: "full sun", Water: "low ", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "low toxic", attracts: "butterflies ", System: "extensive", Reference: "DESY HALLE 36, Hamburg, Germany", image_url: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Sedum_album_03_ies.jpg"},
  {Nr: 30, common_name: "Meadow Clary", scientific_name: "Salvia pratensis", drawing: "https://i.postimg.cc/bvcyc4GJ/salvia-pratensis.png", mainspecies: "Lamiaceae", Type: "Forb/Herb", height: "30 cm to 90 cm", flowering_time: "jun, jul, aug", region: "Europe, Western Asia, Northern Africa", climate: "", Exposure: "full sun", Water: "low, average", soil: "chalk, loam, sand", evergreen: "Deciduous", toxicity: "not toxic", attracts: "bees, butterflies, hummingbirds", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Salvia_pratensis_LC0340.jpg/1000px-Salvia_pratensis_LC0340.jpg"},
  {Nr: 31, common_name: "Spurge", scientific_name: "Euphorbia", drawing: "https://i.postimg.cc/rmcFMPXN/wolfsmilch.png", mainspecies: "Euphorbiaceae", Type: "Forb/Herb / Shrub", height: "90 cm to 120 cm", flowering_time: "apr, may, jun", region: "Sicily, Southern Italy", climate: "9 to 11", Exposure: "full sun, partial sun", Water: "low", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "toxic if ingested", attracts: "", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Euphorbia_February_2008-2.jpg/1000px-Euphorbia_February_2008-2.jpg"},
  {Nr: 32, common_name: "Dianthus", scientific_name: "Dianthus carthusianorum", drawing: "https://i.postimg.cc/vBz8BtGF/kart-usernelke.png", mainspecies: "Caryophyllaceae", Type: "Forb/Herb", height: "60 cm to 90 cm", flowering_time: "jun, jul, aug, sep", region: "Europe", climate: "5 to 9", Exposure: "full sun", Water: "low, average", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "toxic to dogs, cats, horses", attracts: "bees, butterflies ", System: "intensive", Reference: "DESY HALLE 36, Hamburg, Germany", image_url: "https://upload.wikimedia.org/wikipedia/commons/4/42/Dianthus_caryophyllus_L_%28Clove_pink%29.JPG"},
  {Nr: 33, common_name: "Festuca", scientific_name: "Festuca glauca", drawing: "https://i.postimg.cc/J7p4CxTj/festuca.png", mainspecies: "Poaceae", Type: "Graminoid", height: "20 cm to 30 cm", flowering_time: "jun, jul ", region: "Mediterranean region", climate: " 1 to 8", Exposure: "full sun", Water: "low", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "not toxic", attracts: "", System: "extensive", Reference: "Valletta Design Cluster, Malta; High Line, New York", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Festuca_glauca_001_Tehran_Botanical_garden_2016.jpg/1000px-Festuca_glauca_001_Tehran_Botanical_garden_2016.jpg"},
  {Nr: 34, common_name: "White clover", scientific_name: "Trifolium repens", drawing: "https://i.postimg.cc/GhNLH2n2/trifolium-repens.png", mainspecies: "Leguminosae", Type: "Forb/herb", height: "8 cm to 15 cm", flowering_time: "may, jun, jul, aug, sep, oct", region: "Europe", climate: "1 to 8", Exposure: "full sun, partial sun", Water: "average", soil: "chalk, clay, loam, sand", evergreen: "Evergreen", toxicity: "not toxic", attracts: "bees, butterflies ", System: "extensive", Reference: "The Greenest of the Green block, Helsinki, Finland", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Trifolium_repens_-_white_clover_on_way_from_Govindghat_to_Gangria_at_Valley_of_Flowers_National_Park_-_during_LGFC_-_VOF_2019_%281%29.jpg/1000px-Trifolium_repens_-_white_clover_on_way_from_Govindghat_to_Gangria_at_Valley_of_Flowers_National_Park_-_during_LGFC_-_VOF_2019_%281%29.jpg"},
  {Nr: 35, common_name: "Prickly Poppy", scientific_name: "Papaver argemone", drawing: "https://i.postimg.cc/fLbpccxh/Papaver-argemone.png", mainspecies: "Papaveraceae", Type: "Forb/Herb", height: "15 cm to 30 cm", flowering_time: "may, jun, jul", region: "Mediterranean region", climate: "", Exposure: "full sun", Water: "low, average", soil: "chalk, clay, loam, sand", evergreen: "Deciduous", toxicity: "low toxic", attracts: "bees, butterflies", System: "extensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Papaver_April_2010-3.jpg/1000px-Papaver_April_2010-3.jpg"},
  {Nr: 36, common_name: "Hawkweed", scientific_name: "Hieracium pilosella", drawing: "https://i.postimg.cc/QtnP0FbK/Hieracium-pilosella.png", mainspecies: "Asteraceae", Type: "Forb/Herb", height: "5 cm to 25 cm", flowering_time: "may, jun, jul, aug, sep, oct", region: "Europe, Caucasus, Western Siberia", climate: "", Exposure: "full sun, partial sun", Water: "low ", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "not toxic", attracts: "bees", System: "extensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Yellow_Hawkweed.jpg/1000px-Yellow_Hawkweed.jpg"},
  {Nr: 37, common_name: "Wild Strawberry", scientific_name: "Fragaria vesca", drawing: "https://i.postimg.cc/FFYsmcwq/Fragaria-vesca.png", mainspecies: "Rosaceae", Type: "Forb/Herb", height: "8 cm to 23 cm", flowering_time: "apr, may, jun", region: "Northern Hemisphere", climate: "", Exposure: "full sun, partial sun, shade", Water: "average", soil: "clay, loam, sand", evergreen: "Deciduous", toxicity: "not toxic", attracts: "birds ", System: "extensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Illustration_Fragaria_vesca0.jpg/1000px-Illustration_Fragaria_vesca0.jpg"},
  {Nr: 38, common_name: "Flanders Poppy", scientific_name: "Papaver rhoes", drawing: "https://i.postimg.cc/nhJHvWMb/Papaver-rhoes.png", mainspecies: "Papaveraceae", Type: "Forb/Herb", height: "30 cm to 60 cm", flowering_time: "may, jun, jul", region: "Africa, Europe, Asia", climate: "1 to 11", Exposure: "full sun", Water: "average", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "low toxic", attracts: "bees", System: "extensive", Reference: "", image_url: ""},
  {Nr: 39, common_name: "Catnip", scientific_name: "Nepeta cataria", drawing: "https://i.postimg.cc/bJs8ycVb/nepeta-cataria.png", mainspecies: "Lamiaceae", Type: "Forb/Herb", height: "60 cm to 90 cm", flowering_time: "jul, aug, sep ", region: "Europe, Middle East, Central Asia", climate: "", Exposure: "full sun, partial sun", Water: "average", soil: "chalk, loam, sand", evergreen: "Deciduous", toxicity: "not toxic", attracts: "bees, butterflies", System: "extensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Catnip_flowers.jpg/1000px-Catnip_flowers.jpg"},
  {Nr: 40, common_name: "Stonecrop", scientific_name: "Sedum telephium", drawing: "https://i.postimg.cc/wMNpN5pj/Sedum-telephium.png", mainspecies: "Crassulaceae", Type: "Forb/Herb", height: "30 cm to 60 cm", flowering_time: "aug, sep, oct", region: "North America, Europe, Asia", climate: "1 to 9", Exposure: "full sun", Water: "low", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "low toxic", attracts: "bees, butterflies, hummingbirds", System: "extensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sedum_telephium_240808e.jpg/1000px-Sedum_telephium_240808e.jpg"},
  {Nr: 41, common_name: "Bluebell", scientific_name: "Campanula rotundifolia", drawing: "https://i.postimg.cc/Mp581KhV/campanula-rotundifolia.png", mainspecies: "Campanulaceae", Type: "Forb/Herb", height: "30 cm to 60 cm", flowering_time: "jun, jul, aug, sep", region: "North America, Europe, Asia", climate: "3 to 7", Exposure: "full sun, partial sun", Water: "average", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "not toxic", attracts: "", System: "extensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Campanula_rotondifolia.jpg/1000px-Campanula_rotondifolia.jpg"},
  {Nr: 42, common_name: "White Yarrow", scientific_name: "Achillea millefolium", drawing: "https://i.postimg.cc/mkCvkbYc/archillea-millefolium.png", mainspecies: "Compositae", Type: "Forb/Herb", height: "60 cm to 90 cm", flowering_time: "may, jun", region: "Europe, Western Asia, North America", climate: "1 to 9", Exposure: "full sun, partial sun", Water: "low", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "toxic to dogs, cats, horses", attracts: "", System: "extensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Achillea_millefolium_%28bright%29.jpg/1000px-Achillea_millefolium_%28bright%29.jpg"},
  {Nr: 43, common_name: "Common Sorrel", scientific_name: "Rumex acetosa", drawing: "https://i.postimg.cc/28fpJZYn/rumex-acetosella.png", mainspecies: "Polygonaceae", Type: "Forb/Herb", height: "50 cm to 100 cm", flowering_time: "may, jun, jul, aug, sep", region: "Europe, Asia", climate: "", Exposure: "full sun, partial sun", Water: "average", soil: "chalk, clay, loam", evergreen: "Evergreen", toxicity: "low toxic", attracts: "", System: "extensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/%28MHNT%29_Rumex_acetosa_-_Habit.jpg/1000px-%28MHNT%29_Rumex_acetosa_-_Habit.jpg"},
  {Nr: 44, common_name: "Stork's bill", scientific_name: "Erodium Chrysanthum", drawing: "https://i.postimg.cc/XYQTp1Cg/reiherschnabel.png", mainspecies: "Geraniaceae", Type: "Forb/Herb", height: "10 cm to 25 cm", flowering_time: "may, jun, jul, aug", region: "Greece", climate: "", Exposure: "full sun", Water: "low", soil: "chalk, loam, sand", evergreen: "Evergreen", toxicity: "toxic", attracts: "", System: "extensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Erodium_chrysanthum_close-up.jpg/1000px-Erodium_chrysanthum_close-up.jpg"},
  {Nr: 45, common_name: "Shooting Star", scientific_name: "Dodecatheon meadia", drawing: "https://i.postimg.cc/nLWg1sTj/dodecatheon-meadia.png", mainspecies: "Primulaceae", Type: "Forb/Herb", height: "23 cm to 60 cm", flowering_time: "may, jun", region: "Eastern and Central North America ", climate: "1 to 8", Exposure: "full sun, partial sun, shade", Water: "average", soil: "chalk, clay, loam, sand", evergreen: "Deciduous", toxicity: "not toxic", attracts: "bees, bumblebees ", System: "intensive", Reference: "High Line, New York", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Dodecatheon_meadia_01.JPG/1000px-Dodecatheon_meadia_01.JPG"},
  {Nr: 46, common_name: "Yellow Coneflower", scientific_name: "Echinacea paradoxa", drawing: "https://i.postimg.cc/3RD6fKbL/echinacea-paradoxa.png", mainspecies: "Compositae", Type: "Forb/Herb", height: "60 cm to 90 cm", flowering_time: "jul, aug, sep, oct", region: "Arkansis, Missouri", climate: "5 to 11", Exposure: "full sun", Water: "low", soil: "chalk, loam, sand", evergreen: "Deciduous", toxicity: "not toxic", attracts: "birds, bees, butterflies", System: "intensive", Reference: "High Line, New York", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Echinacea_paradoxa.jpg/1000px-Echinacea_paradoxa.jpg"},
  {Nr: 47, common_name: "Blue Grama", scientific_name: "Bouteloua gracilis", drawing: "https://i.postimg.cc/15STM10H/bouteloua-gracilis.png", mainspecies: "Poaceae", Type: "Graminoid", height: "30 cm to 60 cm", flowering_time: "jul, aug, sep", region: "Southern and Western United States, Mexico", climate: "5 to 9", Exposure: "full sun", Water: "low", soil: "chalk, clay, loam, sand", evergreen: "Evergreen", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "High Line, New York", image_url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Bouteloua_gracilis.jpg"},
  {Nr: 48, common_name: "Wood Anemone", scientific_name: "Anemone nemorosa", drawing: "https://i.postimg.cc/CxL2TCQn/anemone-nemorosa.png", mainspecies: "Ranunculaceae", Type: "Forb/Herb", height: "8 cm to 10 cm", flowering_time: "apr", region: "Europe", climate: "1 to 8", Exposure: "partial sun", Water: "average", soil: "chalk, clay, loam", evergreen: "Deciduous", toxicity: "toxic", attracts: "", System: "intensive", Reference: "High Line, New York", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Anemone_nemorosa_001.JPG/1000px-Anemone_nemorosa_001.JPG"},
  {Nr: 49, common_name: "Henry's Lily", scientific_name: "Lilium Henryi", drawing: "https://i.postimg.cc/nLXwMFZH/lilium-henryi.png", mainspecies: "Liliaceae", Type: "Forb/Herb", height: "120 cm to 240 cm", flowering_time: "aug, sep", region: "China", climate: "1 to 7", Exposure: "partial sun", Water: "average", soil: "chalk, clay, loam, sand", evergreen: "Deciduous", toxicity: "toxic to cats", attracts: "bees, butterflies, hummingbirds", System: "intensive", Reference: "High Line, New York", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Lilium_henryi_Inflorescence_BotGardBln0806a.JPG/1000px-Lilium_henryi_Inflorescence_BotGardBln0806a.JPG"},
  {Nr: 50, common_name: "White Trillium", scientific_name: "Trillium grandiflorum", drawing: "https://i.postimg.cc/yd9QXLkt/trilium-grandiflorum.png", mainspecies: "Melanthiaceae", Type: "Forb/Herb", height: "30 cm to 60 cm", flowering_time: "apr, may", region: "Eastern North America", climate: "3 to 7", Exposure: "partial sun, shade", Water: "average", soil: "chalk, loam, sand", evergreen: "Deciduous", toxicity: "toxic", attracts: "", System: "intensive", Reference: "High Line, New York", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Trillium_grandiflorum_at_Backus_Woods.jpg/1000px-Trillium_grandiflorum_at_Backus_Woods.jpg"},
  {Nr: 51, common_name: "Viorna Group", scientific_name: "Clematis pitcheri", drawing: "https://i.postimg.cc/rsNf7zG9/clematis-pitcheri.png", mainspecies: "Ranunculaceae", Type: "Vine", height: "3 m to 4 m", flowering_time: "jun, jul, aug, sep", region: "Northern Mexico, Southern and Central United States", climate: "", Exposure: "full sun, partial sun", Water: "average", soil: "chalk, clay, loam, sand", evergreen: "Deciduous", toxicity: "toxic to dogs, cats, horses", attracts: "birds, bees, butterflies, hummingbirds", System: "intensive", Reference: "High Line, New York", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Clematis_pitcheri_2.jpg/1000px-Clematis_pitcheri_2.jpg"},
  {Nr: 52, common_name: "Compass Plant", scientific_name: "Silphium laciniatum", drawing: "https://i.postimg.cc/CLwPkHYr/silphium-laciniatum.png", mainspecies: "Compositae", Type: "Forb/Herb", height: "150 cm to 270 cm", flowering_time: "jul, aug, sep", region: "North America ", climate: "5 to 9", Exposure: "full sun", Water: "low, average", soil: "clay, loam", evergreen: "Deciduous", toxicity: "not toxic", attracts: "birds, butterflies", System: "intensive", Reference: "High Line, New York", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Silphium_laciniatum_Arkansas.jpg/1000px-Silphium_laciniatum_Arkansas.jpg"},
  {Nr: 53, common_name: "Path rush", scientific_name: "Juncus tenuis", drawing: "https://i.postimg.cc/GpL0s3xT/juncus-tenuis.png", mainspecies: "Juncaceae", Type: "Graminoid", height: "20 cm to 60 cm", flowering_time: "jun, jul, aug, sep", region: "United States", climate: "4 to 8", Exposure: "partial shade", Water: "average", soil: "loam, sand", evergreen: "Deciduous", toxicity: "not toxic", attracts: "bees, butterflies", System: "extensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Jute_002_lvp.jpg"},
  {Nr: 54, common_name: "Lady orchid", scientific_name: "Orchis purpurea", drawing: "https://i.postimg.cc/02S1TBNj/orchis-pupurea.png", mainspecies: "Orchidaceae", Type: "Forb/herb", height: "30 cm to 60 cm", flowering_time: "apr, may, jun", region: "Northern Europe, Eastern Europe", climate: "5 to 8", Exposure: "full sun ", Water: "low, average", soil: "chalk. loam", evergreen: "Deciduous", toxicity: "not toxic", attracts: "bees", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Orchis_italica_a.JPG"},
  {Nr: 55, common_name: "Sago pondweed", scientific_name: "Stuckenia pectinata", drawing: "https://i.postimg.cc/XvpRgHtn/Stuckenia-pectinata.png", mainspecies: "Potamogetonaceae", Type: "Forb/herb", height: "under water", flowering_time: "may, jun, jul, aug, sep", region: "Europe, United States, Asia, Africa", climate: "", Exposure: "partial sun ", Water: "high", soil: "silt", evergreen: "Deciduous", toxicity: "not toxic", attracts: "bees", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/PotamogetonPectinatus1.jpg/1000px-PotamogetonPectinatus1.jpg"},
  {Nr: 56, common_name: "Henbit", scientific_name: "Lamium amplexicaule", drawing: "https://i.postimg.cc/50yZnPGx/lamium-amplexicaule.png", mainspecies: "Lamiaceae", Type: "Forb/herb", height: "10 cm to 30 cm", flowering_time: "mar, apr, may, jun, jul, aug, sep, oct", region: "Northern Europe, Eastern Europe, Asia", climate: "5 to 9", Exposure: "full sun ", Water: "average", soil: "sand, loam", evergreen: "Deciduous", toxicity: "not toxic", attracts: "bees", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Lamium_amplexicaule_%2852878370216%29.jpg/1000px-Lamium_amplexicaule_%2852878370216%29.jpg"},
  {Nr: 57, common_name: "Lampwickplant", scientific_name: "Phlomis lychnitis", drawing: "https://i.postimg.cc/XYmkHwSb/Phlomis-lychnitis.png", mainspecies: "Lamiaceae", Type: "Forb/Herb", height: "30 cm to 65 cm", flowering_time: "may, jun, jul", region: "France, Portugal, Spain", climate: "7 to 10", Exposure: "full sun ", Water: "low ", soil: "chalk, clay, sand", evergreen: "Deciduous", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Phlomis0_KS.jpg"},
  {Nr: 58, common_name: "Spotted henbit", scientific_name: "Lamium maculatum", drawing: "https://i.postimg.cc/85HWSv3s/Lamium-maculatum.png", mainspecies: "Lamiaceae", Type: "Forb/herb", height: "10 cm to 25 cm ", flowering_time: "apr, may, jun, jul, aug, sep, oct", region: "Asia, Eastern European, Central Europe, Palestine", climate: "4 to 9", Exposure: "partial sun ", Water: "average", soil: "loam, sand", evergreen: "Deciduous", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Lamium_maculatum_cm01.jpg"},
  {Nr: 59, common_name: "Lizard orchid", scientific_name: "Himantoglossum hircinum", drawing: "https://i.postimg.cc/ZRQXg8t6/hirmantoglossum-hircinum.png", mainspecies: "Orchidaceae", Type: "Forb/Herb", height: "50 cm to 100 cm", flowering_time: "may, jun, jul", region: "Central Europe, Northern Africa", climate: "5 to 7", Exposure: "partial sun", Water: "low, average", soil: "chalk, loam ", evergreen: "Deciduous", toxicity: "not toxic", attracts: "bees, butterflies", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Himantoglossum_hircinum_LC0347.jpg/1000px-Himantoglossum_hircinum_LC0347.jpg"},
  {Nr: 60, common_name: "Green dock", scientific_name: "Rumex conglomeratus", drawing: "https://i.postimg.cc/3wx8QF6q/rumex-conglomeratus.png", mainspecies: "Polygonaceae", Type: "Forb/herb", height: "30 cm to 60 cm", flowering_time: "jun, jul, aug, sep", region: "Eastern Europe, Central Europe, Asia", climate: "4 to 8", Exposure: "full sun", Water: "high", soil: "clay, loam ", evergreen: "Deciduous", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/6/65/Rumex_conglomeratus.jpg"},
  {Nr: 61, common_name: "Bog-myrtle", scientific_name: "Myrica gale", drawing: "https://i.postimg.cc/htg4pB0c/myrica-gale.png", mainspecies: "Myricaceae", Type: "Shrub", height: "60 cm to 120 cm", flowering_time: "apr, may", region: "Mediterranean region, United States, Asia", climate: "3 to 7", Exposure: "partial sun", Water: "high", soil: "peat", evergreen: "Evergreen", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Myrica-gale-hunlig.JPG"},
  {Nr: 62, common_name: "Early marsh orchid", scientific_name: "Dactylorhiza incarnata", drawing: "https://i.postimg.cc/Kjf5JwFq/Dactylorhiza-incarnata.png", mainspecies: "Orchidaceae", Type: "Forb/herb", height: "20 cm to 60 cm", flowering_time: "may, jun", region: "Eastern Europe, Asia", climate: "4 to 7", Exposure: "full sun", Water: "high", soil: "chalk, loam", evergreen: "Deciduous", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Dactylorhiza_fuchsii_Mariazell_01.JPG/1000px-Dactylorhiza_fuchsii_Mariazell_01.JPG"},
  {Nr: 63, common_name: "Broad-leaved marsh orchid", scientific_name: "Dactylorhiza majalis", drawing: "https://i.postimg.cc/wM4mtp9p/Dactylorhiza-majalis.png", mainspecies: "Orchidaceae", Type: "Forb/herb", height: "30 cm to 80 cm", flowering_time: "apr, may, jun, jul", region: "Eastern Europe, Central Europe, Asia", climate: "4 to 7", Exposure: "full sun", Water: "high", soil: "chalk, loam ", evergreen: "Deciduous", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Dactylorhiza_majalis_LC0269.jpg/1000px-Dactylorhiza_majalis_LC0269.jpg"},
  {Nr: 64, common_name: "Common butterwort", scientific_name: "Pinguicula vulgaris", drawing: "https://i.postimg.cc/1Rk3V6ng/pinguicula-argentea.png", mainspecies: "Lentibulariaceae", Type: "Forb/herb", height: "5 cm to 15 cm", flowering_time: "may, jun, jul", region: "Eastern Europe, Central Europe, Asia", climate: "2 to 6", Exposure: "full sun", Water: "high", soil: "peat, sand", evergreen: "Deciduous", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Pinguicula_vulgaris_flower_%28front_view%29_-_Keila.jpg/1000px-Pinguicula_vulgaris_flower_%28front_view%29_-_Keila.jpg"},
  {Nr: 65, common_name: "Small-flower crane's-bill", scientific_name: "Geranium pusillum", drawing: "https://i.postimg.cc/y6yn1g9m/Geranium-pusillum.png", mainspecies: "Geraniaceae", Type: "Forb/herb", height: "10 cm 30 cm", flowering_time: "may, jun, jul, aug, sep", region: "Eastern Europe, Central Europe, Asia", climate: "4 to 8", Exposure: "partial sun", Water: "average", soil: "sand, loam", evergreen: "Deciduous", toxicity: "not toxic", attracts: "", System: "extensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Geranium_pusillum.jpeg"},
  {Nr: 66, common_name: "Beech fern", scientific_name: "Phegopteris connectilis", drawing: "https://i.postimg.cc/yYDsJ7cx/phegopteris-connectilis.png", mainspecies: "Aspleniaceae", Type: "Forb/herb", height: "30 cm to 60 ", flowering_time: "jun, jul, aug, sep", region: "Eastern Europe, Central Europe, Asia", climate: "4 to 8", Exposure: "partial shade", Water: "average", soil: "loam ", evergreen: "Deciduous", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Phegopteris_connectilis_AT.JPG/1000px-Phegopteris_connectilis_AT.JPG"},
  {Nr: 67, common_name: "Bird's-nest orchid", scientific_name: "Neottia nidus-avis", drawing: "https://i.postimg.cc/8z0t22vx/Neottia-nidus-avis.png", mainspecies: "Orchidaceae", Type: "Forb/herb", height: "20 cm to 40 cm", flowering_time: "may, jun, jul", region: "Eastern Europe, Central Europe, Asia", climate: "5 to 7", Exposure: "deep shade", Water: "average", soil: "chalk, loam", evergreen: "Deciduous", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flowering_plants_of_Neottia_nidus-avis_-_Jers%C3%A1kov%C3%A1%2C_Minasiewicz_%26_Selosse_%282022%29.jpg/1000px-Flowering_plants_of_Neottia_nidus-avis_-_Jers%C3%A1kov%C3%A1%2C_Minasiewicz_%26_Selosse_%282022%29.jpg"},
  {Nr: 68, common_name: "Hoary cinquefoil", scientific_name: "Potentilla argentea", drawing: "https://i.postimg.cc/bYCqNZG4/potentilla-argentea.png", mainspecies: "Rosaceae", Type: "Forb/herb", height: "15 cm to 40 cm", flowering_time: "may, jun, jul, aug", region: "Eastern Europe, Central Europe, Asia", climate: "3 to 7", Exposure: "full sun", Water: "low", soil: "sand, chalk", evergreen: "Deciduous", toxicity: "not toxic", attracts: "", System: "extensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Potentilla_argentea_1.jpg/1000px-Potentilla_argentea_1.jpg"},
  {Nr: 69, common_name: "Bermuda grass", scientific_name: "Cynodon dactylon", drawing: "https://i.postimg.cc/nrpkKp89/cynodon-dactylon.png", mainspecies: "Poaceae", Type: "Graminoid", height: "10 cm to 30 cm", flowering_time: "jul, aug, sep", region: "Eastern Europe, Central Europe, Asia", climate: "7 to 10", Exposure: "full sun", Water: "average", soil: "clay, loam, sand ", evergreen: "Evergreen", toxicity: "not toxic", attracts: "", System: "intensive", Reference: "", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Cynodon_dactylon_2.jpg/1000px-Cynodon_dactylon_2.jpg"}
];


const container = document.querySelector('.container_cards');
  // --- Basket logic ---
function setBasketCookie(basket) {
  document.cookie = `basket=${encodeURIComponent(JSON.stringify(basket))}; path=/; max-age=31536000`;
}
function getBasketCookie() {
  const match = document.cookie.match(/(?:^|;\s*)basket=([^;]*)/);
  return match ? JSON.parse(decodeURIComponent(match[1])) : [];
}
function clearBasketCookie() {
  document.cookie = "basket=; path=/; max-age=0";
}

// --- Popup logic ---
function showPopup(flower) {
  const oldPopup = document.getElementById('flower-popup');
  if (oldPopup) oldPopup.remove();

  const popup = document.createElement('div');
  popup.id = 'flower-popup';
  popup.style.position = 'fixed';
  popup.style.top = 0;
  popup.style.left = 0;
  popup.style.width = '100vw';
  popup.style.height = '100vh';
  popup.style.background = 'rgba(0,0,0,0.9)';
  popup.style.display = 'flex';
  popup.style.alignItems = 'center';
  popup.style.justifyContent = 'center';
  popup.style.zIndex = 10000;

  const content = document.createElement('div');
  content.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
  content.style.color = '#fff';
  content.style.padding = '3em';
  content.style.borderRadius = '20px';
  content.style.width = '50vw';
  content.style.maxHeight = '85vh';
  content.style.overflowY = 'auto';
  content.style.position = 'relative';
  content.style.boxShadow = '0 20px 60px rgba(0,0,0,0.8)';
  content.style.border = '1px solid #444';
  content.style.display = 'grid';
  content.style.gridTemplateColumns = '2fr 3fr';
  content.style.gap = '5em';

  // Helper function to check if a field has meaningful data
  function hasData(value) {
    return value && value !== '-' && value !== '' && value.toString().trim() !== '';
  }

  // Create image section
  const imageSection = document.createElement('div');
  imageSection.style.display = 'flex';
  imageSection.style.flexDirection = 'column';
  imageSection.style.gap = '1em';
  
  // Main drawing/illustration
  if (hasData(flower.drawing)) {
    const drawingImg = document.createElement('img');
    drawingImg.src = flower.drawing;
    drawingImg.alt = flower.common_name + ' illustration';
    drawingImg.style.maxWidth = '100%';
    drawingImg.style.height = 'auto';
    drawingImg.style.borderRadius = '12px';
    drawingImg.style.background = '#111';
    drawingImg.style.border = '2px solid var(--color_active)';
    imageSection.appendChild(drawingImg);
  }
  
  // Photo from image_url
  if (hasData(flower.image_url)) {
    const photoImg = document.createElement('img');
    photoImg.src = flower.image_url;
    photoImg.alt = flower.common_name + ' photo';
    photoImg.style.maxWidth = '100%';
    photoImg.style.height = 'auto';
    photoImg.style.borderRadius = '12px';
    photoImg.style.background = '#111';
    photoImg.style.border = '1px solid #555';
    imageSection.appendChild(photoImg);
  }

  // Create info section
  const infoSection = document.createElement('div');
  
  const title = document.createElement('h2');
  title.textContent = flower.common_name;
  title.style.margin = '0 0 0.1em 0';
  title.style.fontSize = '2.5em';
  title.style.color = 'var(--color_active)';
  title.style.fontWeight = '700';
  infoSection.appendChild(title);

  const scientific = document.createElement('p');
  scientific.innerHTML = `<em style="font-size: 1.3em; color: #ccc;">${flower.scientific_name}</em>`;
  scientific.style.margin = '0 0 2em 0';
  infoSection.appendChild(scientific);

  // Data fields with proper labels and only show if they have data
  const fields = [
    { key: 'Nr', label: 'Number' },
    { key: 'mainspecies', label: 'Family' },
    { key: 'Type', label: 'Plant Type' },
    { key: 'height', label: 'Height' },
    { key: 'flowering_time', label: 'Flowering Time' },
    { key: 'region', label: 'Native Region' },
    { key: 'climate', label: 'Climate Zones' },
    { key: 'Exposure', label: 'Exposure' },
    { key: 'Water', label: 'Water Needs' },
    { key: 'soil', label: 'Soil Type' },
    { key: 'evergreen', label: 'Foliage Type' },
    { key: 'toxicity', label: 'Toxicity' },
    { key: 'attracts', label: 'Attracts Wildlife' },
    { key: 'System', label: 'Growing System' },
    { key: 'Reference', label: 'Reference' }
  ];

  const dataList = document.createElement('div');
  dataList.style.lineHeight = '1.8';
  
  fields.forEach(field => {
    if (hasData(flower[field.key])) {
      const item = document.createElement('div');
      item.style.marginBottom = '0.8em';
      item.style.display = 'flex';
      item.style.alignItems = 'flex-start';
      item.style.gap = '1em';
      
      const label = document.createElement('strong');
      label.textContent = field.label + ':';
      label.style.color = 'var(--color_active)';
      label.style.fontWeight = '600';
      label.style.minWidth = '140px';
      label.style.flexShrink = '0';
      
      const value = document.createElement('span');
      value.textContent = flower[field.key];
      value.style.color = '#fff';
      value.style.flex = '1';

      
      item.appendChild(label);
      item.appendChild(value);
      dataList.appendChild(item);
    }
  });
  
  infoSection.appendChild(dataList);

  content.appendChild(imageSection);
  content.appendChild(infoSection);

  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '×';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '1em';
  closeBtn.style.right = '1em';
  closeBtn.style.background = 'transparent';
  closeBtn.style.color = '#fff';
  closeBtn.style.fontSize = '2em';
  closeBtn.style.border = 'none';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.fontWeight = 'normal';
  closeBtn.style.lineHeight = '1';
  closeBtn.addEventListener('click', () => popup.remove());
  content.appendChild(closeBtn);

  popup.appendChild(content);
  document.body.appendChild(popup);

  popup.addEventListener('click', e => {
    if (e.target === popup) popup.remove();
  });

  // Add responsive design
  if (window.innerWidth <= 768) {
    content.style.width = '95vw';
    content.style.gridTemplateColumns = '1fr';
    content.style.padding = '2em';
  }
}

// --- Card rendering logic (for both archive and basket views) ---
function renderCards(arr = data_unfiltered, container = document.querySelector('.container_cards'), basketMode = false) {
  container.innerHTML = "";
  let basket = getBasketCookie();

  arr.forEach(flower => {
    const flowerNr = String(flower.Nr);
    const inBasket = basket.includes(flowerNr);

    const card = document.createElement('div');
    card.className = 'card' + (inBasket ? ' selected' : '');
    card.dataset.number = flowerNr;

    card.innerHTML = `
      <div class="card_image_container">
        <div class="card_image_nr">${flower.Nr}</div>
        <img class="card_image" src="${flower.drawing || flower.image_url}" alt="[${flower.common_name}]">
      </div>
      <div class="card_name">
        <strong>${flower.common_name}</strong><br><em>${flower.scientific_name}</em>
      </div>
      <div class="card_details">
        <p>${flower.Type}</p>
        <p>${flower.height}</p>
        <p>${flower.region}</p>
        <p>${flower.Exposure}</p>
      </div>
      ${basketMode ? '' : `
      <button class="basket-btn" aria-label="${inBasket ? 'Remove from Basket' : 'Add to Basket'}">
        <svg id="like_button" data-name="like button" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 47.872 47.062">
          <path id="Pfad_63" data-name="Pfad 63"
            d="M85.515,100.822a2.093,2.093,0,0,1-1.484-.615l-5.488-5.488a2.1,2.1,0,0,1,2.968-2.968l4,4,9.491-9.49a2.1,2.1,0,0,1,2.968,2.968L87,100.207A2.093,2.093,0,0,1,85.515,100.822Z"
            transform="translate(-64.156 -68.886)"
            fill="${inBasket ? '#B692B3' : 'none'}"
            stroke="${inBasket ? '#B692B3' : '#fff'}"
            stroke-miterlimit="10"
            stroke-width="2"/>
          <rect id="Rechteck_Häkchen" data-name="Rechteck Häkchen" width="50" height="50" fill="none"/>
        </svg>
      </button>
      `}
    `;

    if (!basketMode) {
      card.querySelector('.basket-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        let basket = getBasketCookie();
        if (inBasket) {
          basket = basket.filter(n => n !== flowerNr);
        } else {
          basket.push(flowerNr);
        }
        setBasketCookie(basket);
        renderCards(arr, container, basketMode);
      });
    }
    card.addEventListener('click', () => showPopup(flower));
    container.appendChild(card);
  });
}

// --- Basket page logic ---
function renderBasket() {
  const basket = getBasketCookie();
  const basketItems = data_unfiltered.filter(item => basket.includes(String(item.Nr)));
  const container = document.getElementById('basketContainer');
  renderCards(basketItems, container, true);
}

// --- Export for basket.html ---
window.showPopup = showPopup;
window.renderBasket = renderBasket;
window.clearBasketCookie = clearBasketCookie;
