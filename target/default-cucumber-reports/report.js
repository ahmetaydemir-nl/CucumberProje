$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/amazonexamples.feature");
formatter.feature({
  "name": "Amazonda Urun Arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@birdenfazlaexample"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC07_kullanici amazonda dropdown ve aramakutusu kullanarak arama yapar",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "kullanici \"http://amazon.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "kullanici dropdownda \"\u003ckategori\u003e\" secer",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici aramakutusuna \"\u003curunismi\u003e\" yazar ve arar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test Verileri",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "kategori",
        "urunismi"
      ]
    },
    {
      "cells": [
        "Automotive",
        "phone holder"
      ]
    },
    {
      "cells": [
        "Baby",
        "stroller"
      ]
    },
    {
      "cells": [
        "Books",
        "Miserables"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC07_kullanici amazonda dropdown ve aramakutusu kullanarak arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@birdenfazlaexample"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://amazon.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici dropdownda \"Automotive\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_dropdownda_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"phone holder\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC07_kullanici amazonda dropdown ve aramakutusu kullanarak arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@birdenfazlaexample"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://amazon.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici dropdownda \"Baby\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_dropdownda_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"stroller\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC07_kullanici amazonda dropdown ve aramakutusu kullanarak arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@birdenfazlaexample"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://amazon.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici dropdownda \"Books\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_dropdownda_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"Miserables\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/amazonsearch.feature");
formatter.feature({
  "name": "Amazon Arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@urunarama"
    }
  ]
});
formatter.background({
  "name": "Oncesinde Caliscak Method (BeforeMethod)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC02_kullanici amazonda arama yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@urunarama"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.step({
  "name": "kullanici aramakutusuna headphones yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_headphones_yazar_ve_arar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Oncesinde Caliscak Method (BeforeMethod)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC03_kullanici amazonda arama yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@urunarama"
    },
    {
      "name": "@amazoncamera"
    }
  ]
});
formatter.step({
  "name": "kullanici aramakutusuna camera yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_camera_yazar_ve_arar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/ebay.feature");
formatter.feature({
  "name": "Ebayda Arama",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TC06_kullanici ebayda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ebayarama"
    }
  ]
});
formatter.step({
  "name": "kullanici \"http://ebay.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "kullanici ebayda aramakutusuna \"\u003curunler\u003e\" yazar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici ebaydaki sonuc sayisini ekrana yazar",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test Verileri",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "urunler"
      ]
    },
    {
      "cells": [
        "car"
      ]
    },
    {
      "cells": [
        "child"
      ]
    },
    {
      "cells": [
        "bike"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC06_kullanici ebayda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ebayarama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://ebay.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ebayda aramakutusuna \"car\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_ebayda_aramakutusuna_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ebaydaki sonuc sayisini ekrana yazar",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_ebaydaki_sonuc_sayisini_ekrana_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC06_kullanici ebayda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ebayarama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://ebay.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ebayda aramakutusuna \"child\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_ebayda_aramakutusuna_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ebaydaki sonuc sayisini ekrana yazar",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_ebaydaki_sonuc_sayisini_ekrana_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC06_kullanici ebayda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ebayarama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://ebay.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ebayda aramakutusuna \"bike\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_ebayda_aramakutusuna_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ebaydaki sonuc sayisini ekrana yazar",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_ebaydaki_sonuc_sayisini_ekrana_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/examples.feature");
formatter.feature({
  "name": "Amazon Birden Fazla Arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@teknolojikarma"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC05_kullanici amazonda urun arar",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "kullanici aramakutusuna \"\u003curunler\u003e\" yazar ve arar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.examples({
  "name": "Urun Isimleri",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "urunler"
      ]
    },
    {
      "cells": [
        "headphones"
      ]
    },
    {
      "cells": [
        "camera"
      ]
    },
    {
      "cells": [
        "drone"
      ]
    },
    {
      "cells": [
        "pencil"
      ]
    },
    {
      "cells": [
        "tv"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC05_kullanici amazonda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teknolojikarma"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"headphones\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC05_kullanici amazonda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teknolojikarma"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"camera\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC05_kullanici amazonda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teknolojikarma"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"drone\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC05_kullanici amazonda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teknolojikarma"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"pencil\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC05_kullanici amazonda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@teknolojikarma"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"tv\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/googlearama.feature");
formatter.feature({
  "name": "Google Arama",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC01_kullanici googleda arama yapar",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici google sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.kullanici_google_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "techproeducation aramasi yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.techproeducation_aramasi_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sayfa basligini kontrol eder",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.sayfa_basligini_kontrol_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/parametre.feature");
formatter.feature({
  "name": "Amazon Urun Arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@urunarama1"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.scenario({
  "name": "TC04_kullanici amazonda urun aramasi yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@urunarama1"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramakutusuna \"drone\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/walmart.feature");
formatter.feature({
  "name": "Walmart Urun Arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC08_kullanici walmartta urun arar",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "kullanici \"https://walmart.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "kullanici walmart aramakutusuna \"\u003ckelime\u003e\" yazar ve arar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici walmart sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test Verileri",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "kelime"
      ]
    },
    {
      "cells": [
        "calculator"
      ]
    },
    {
      "cells": [
        "watch"
      ]
    },
    {
      "cells": [
        "flower"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC08_kullanici walmartta urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"https://walmart.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart aramakutusuna \"calculator\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC08_kullanici walmartta urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"https://walmart.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart aramakutusuna \"watch\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".result\\-summary\\-container\"}\n  (Session info: chrome\u003d85.0.4183.121)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-van-Ahmet.local\u0027, ip: \u0027fe80:0:0:0:1cdd:8a11:90d7:3a0b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /var/folders/fj/v09v1fnj7n1...}, goog:chromeOptions: {debuggerAddress: localhost:50551}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2fde657deef55601903cbd9442af85f5\n*** Element info: {Using\u003dclass name, value\u003dresult-summary-container}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\n\tat stepdefinitions.WalmartStepDefinitions.kullanici_walmart_sonuc_sayisini_ekrana_yazdirir(WalmartStepDefinitions.java:14)\n\tat ✽.kullanici walmart sonuc sayisini ekrana yazdirir(file:///Users/ahmetaydemir/IdeaProjects/CucumberProje/src/test/resources/features/walmart.feature:6)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC08_kullanici walmartta urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"https://walmart.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart aramakutusuna \"flower\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});