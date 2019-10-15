"use strict";
const Fees = {
  iaai: {
    standard: [
      { from: 0, to: 99.99, price: 1 },
      { from: 100.0, to: 199.99, price: 40 },
      { from: 200.0, to: 299.99, price: 60 },
      { from: 300.0, to: 349.99, price: 75 },
      { from: 350.0, to: 399.99, price: 90 },
      { from: 400.0, to: 499.99, price: 100 },
      { from: 500.0, to: 599.99, price: 130 },
      { from: 600.0, to: 699.99, price: 145 },
      { from: 700.0, to: 799.99, price: 160 },
      { from: 800.0, to: 899.99, price: 175 },
      { from: 900.0, to: 999.99, price: 190 },
      { from: 1000.0, to: 1099.99, price: 205 },
      { from: 1100.0, to: 1199.99, price: 220 },
      { from: 1200.0, to: 1299.99, price: 230 },
      { from: 1300.0, to: 1399.99, price: 240 },
      { from: 1400.0, to: 1499.99, price: 255 },
      { from: 1500.0, to: 1599.99, price: 270 },
      { from: 1600.0, to: 1699.99, price: 290 },
      { from: 1700.0, to: 1799.99, price: 300 },
      { from: 1800.0, to: 1999.99, price: 310 },
      { from: 2000.0, to: 2199.99, price: 325 },
      { from: 2200.0, to: 2399.99, price: 330 },
      { from: 2400.0, to: 2499.99, price: 345 },
      { from: 2500.0, to: 2999.99, price: 360 },
      { from: 3000.0, to: 3499.99, price: 400 },
      { from: 3500.0, to: 3999.99, price: 450 },
      { from: 4000.0, to: 4499.99, price: 475 },
      { from: 4500.0, to: 4999.99, price: 500 },
      { from: 5000.0, to: 5999.99, price: 525 },
      { from: 6000.0, to: 7499.99, price: 550 },
      { from: 7500.0, to: 19999.99, price: 500 }
    ],
    internetBit: [
      { from: 0, to: 99.99, price: 0 },
      { from: 100.0, to: 499.99, price: 29.0 },
      { from: 500.0, to: 999.99, price: 39.0 },
      { from: 1000.0, to: 1499.99, price: 59.0 },
      { from: 1500.0, to: 1999.99, price: 69.0 },
      { from: 2000.0, to: 3999.99, price: 79.0 },
      { from: 4000.0, to: 5999.99, price: 89.0 },
      { from: 6000.0, to: 7999.99, price: 99.0 },
      { from: 4000.0, to: 999999.99, price: 119.0 }
    ]
  },
  copart: {
    salePrice: [
      { from: 0.01, to: 49.99, price: 1.0 },
      { from: 50.0, to: 99.99, price: 1.0 },
      { from: 100.0, to: 199.99, price: 25.0 },
      { from: 200.0, to: 299.99, price: 50.0 },
      { from: 300.0, to: 349.99, price: 75.0 },
      { from: 350.0, to: 399.99, price: 75.0 },
      { from: 400.0, to: 449.99, price: 110.0 },
      { from: 450.0, to: 499.99, price: 110.0 },
      { from: 500.0, to: 549.99, price: 125.0 },
      { from: 550.0, to: 599.99, price: 130.0 },
      { from: 600.0, to: 699.99, price: 140.0 },
      { from: 700.0, to: 799.99, price: 155.0 },
      { from: 800.0, to: 899.99, price: 170.0 },
      { from: 900.0, to: 999.99, price: 185.0 },
      { from: 1000.0, to: 1199.99, price: 200.0 },
      { from: 1200.0, to: 1299.99, price: 225.0 },
      { from: 1300.0, to: 1399.99, price: 240.0 },
      { from: 1400.0, to: 1499.99, price: 250.0 },
      { from: 1500.0, to: 1599.99, price: 260.0 },
      { from: 1600.0, to: 1699.99, price: 275.0 },
      { from: 1700.0, to: 1799.99, price: 285.0 },
      { from: 1800.0, to: 1999.99, price: 300.0 },
      { from: 2000.0, to: 2399.99, price: 325.0 },
      { from: 2400.0, to: 2499.99, price: 335.0 },
      { from: 2500.0, to: 2999.99, price: 350.0 },
      { from: 3000.0, to: 3499.99, price: 400.0 },
      { from: 3500.0, to: 3999.99, price: 450.0 },
      { from: 4000.0, to: 4499.99, price: 475.0 },
      { from: 4500.0, to: 4999.99, price: 500.0 },
      { from: 5000.0, to: 5999.99, price: 525.0 },
      { from: 6000.0, to: 7499.99, price: 550.0 },
      { from: 7500.0, to: 9999.99, price: 575.0 },
      { from: 10000.0, to: 14999.99, price: 600.0 }
    ],
    olb: [
      { from: 0.0, to: 99.99, price: 0 },
      { from: 100.0, to: 499.99, price: 39 },
      { from: 500.0, to: 999.99, price: 49 },
      { from: 1000.0, to: 1499.9, price: 69 },
      { from: 1500.0, to: 1999.9, price: 79 },
      { from: 2000.0, to: 3999.9, price: 89 },
      { from: 4000.0, to: 5999.9, price: 99 },
      { from: 6000.0, to: 7999.99, price: 119 },
      { from: 8000.0, to: 10000000.0, price: 129 }
    ]
  }
};
const auctionDataReq = {
  type: "",
  lotNum: 0,
  lotPrice: 0
};
const result = {
  excise: 0,
  tax: 0,
  pdv: 0,
  pf: 0,
  broExp: 0,
  transp: 0
};
// $(window).load(function(){
//     $('body').addClass('preloader-site');
// });

$(document).ready(function() {
  $("body").removeClass("preloader-site");
  $(".loader").hide();
  $(".top-menu").css("visibility", "visible");
  initEventHandlers();
  calcEvenHandlers();
  onSelectAuction();
});

function initEventHandlers() {
  $(window).scroll(e => {
    const { scrollY } = e.delegateTarget;
    const isTop = $(".top-menu").hasClass("small-top-menu");

    if (scrollY < 158 && isTop) {
      $(".top-menu").removeClass("small-top-menu");
    }
    if (scrollY > 158 && !isTop) {
      $(".top-menu").addClass("small-top-menu");
    }
  });

  $("#mobile-contacts-btn").click(() => {
    $(".mobile-contacts-block").toggleClass("active");
    $("#mobile-contacts-btn i").toggleClass("active");
  });

  $(".top-menu .fa-bars").click(() => {
    $(".clouse-mobile-menu-icon").css("display", "block");
    $("main").css("filter", "grayscale(70%) blur(3px)");
    $(".mobile-menu").addClass("open");
  });

  $(".clouse-mobile-menu-icon").click(() => {
    $(".clouse-mobile-menu-icon").css("display", "none");
    $("main").css("filter", "none");
    $(".mobile-menu").removeClass("open");
  });

  $(".read-more-btn").click(e => {
    const element = $(e.target).closest(".read-more-btn")[0];
    $(element).toggleClass("active");
  });

  $(".accordion div")
    .hide()
    .prev()
    .click(function() {
      $(".accordion div")
        .not(this)
        .slideUp();
      $(this)
        .next()
        .not(":visible")
        .slideDown();
      $(this)
        .find(".fa-chevron-down")
        .toggleClass("active");
    });

  $("#call-form input").change(event =>
    event.target.value !== ""
      ? $(event.target)
          .next()
          .css("display", "none")
      : $(event.target)
          .next()
          .css("display", "block")
  );

  $('a[href^="#"]').click(event => {
    event.preventDefault();

    const id  = $(event.target).attr('href');
    if (id !== '#ms-calc' && id !== '#ms-auction') {
        const top = $(id).offset().top;
        
        $('body,html').animate({scrollTop: top}, 1500);
        if($('.mobile-menu').hasClass('open')) {
            $(".clouse-mobile-menu-icon").css('display', 'none');
            $('main').css('filter', 'none');
            $('.mobile-menu').removeClass('open');
        }
    }
  });

  $(".car-item").click(function() {
    $(this)
      .find(".modal")
      .addClass("active");
  });

  $(".auctions-section .auctions-desc-btn").click(function() {
    $(this)
      .parent()
      .parent()
      .find(".modal")
      .addClass("active");
  });

  $(".close").click(function(event) {
    $(this)
      .parent()
      .parent()
      .removeClass("active");

    event.stopPropagation();
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    fade: true,
    adaptiveHeight: true,
    asNavFor: ".slider-nav"
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    infinite: true
  });

  $(".modal-content .call-to-me-btn").click(function() {
    const modal = $(this).parents(".modal")[0];

    $(modal).removeClass("active");
    event.stopPropagation();
  });

  $("form#mc-embedded-subscribe-form").on("submit", function(t) {
    t.preventDefault();
    const e = $(this);
    let data = e.serialize().split("&");

    if (e[0][0].value === "") {
      data[0] += `dont_id${Math.random()}@input.com`;
    }

    data = data.join("&");

    $.ajax({
      type: e.attr("method"),
      url: e
        .attr("action")
        .replace("/post?", "/post-json?")
        .concat("&c=?"),
      data: data,
      timeout: 5e3,
      cache: !1,
      dataType: "jsonp",
      contentType: "application/json; charset=utf-8",
      success: function(t) {
        alert("Ми приняли інформацію, дякую"),
          e[0].reset(),
          $("form input, form textarea").removeClass("active");
      }
    });
  });
  $("#nav-tab").on("click", ".nav-item", function() {
    $("#results").css("display", "none");
    $("#no-results").css("display", "none");
  });
}

function calcEvenHandlers() {
  let taxData = {
    fuelType: "B",
    ctype: "EUR",
    vol: 0,
    price: 0,
    year: 0,
    kvt: 0
  };

  $("#fuel-type .dropdown-item").on("click", function(e) {
    e.preventDefault();
    $("#engine-type > span").text($(e.target).attr("data-type-name"));
    const fuel = $(e.target).attr("data-type");

    if (fuel == "E") {
      $("#cat-tax-calc > .form-group").show();
      $("#cat-tax-calc > .engine-volumes").hide();
      $("#cat-tax-calc > .car-age").hide();
      $("#cat-tax-calc > .engine-electric").css("display", "flex");
    } else {
      $("#cat-tax-calc > .form-group").show();
      $("#cat-tax-calc > .engine-electric").hide();
    }

    taxData.fuelType = fuel;
  });

  $("#cur-type .dropdown-item").on("click", function(e) {
    e.preventDefault();
    $("#currencyType > span").text($(this).attr("data-type"));
    taxData.ctype = $(this).attr("data-type");
  });
  $("#volumes").on("input", function() {
    taxData.vol = $(this).val();
  });
  $("#kvt").on("input", function() {
    taxData.kvt = $(this).val();
  });
  $("#price").on("input", function() {
    taxData.price = $(this).val();
  });
  $("#year").on("input", function() {
    taxData.year = $(this).val();
  });
  $("#lotNum").on("input", function() {
    auctionDataReq.lotNum = $(this).val();
  });
  $("#lot-price").on("input", function() {
    auctionDataReq.lotPrice = parseInt($(this).val());
  });
  $("form#cat-tax-calc").on("submit", function(e) {
    e.preventDefault();
    auctionDataReq.lotPrice = 0;

    $("#car-label")
      .text("")
      .parent()
      .css("display", "none");
    calcPrice(taxData);
  });
}
function onSelectAuction() {
  function triggerClick(elem) {
    $(elem).click();
  }
  let $auctionSearcher = $("#auction-searcher"),
    $auctionsDd = $("#auctions"),
    $auctionsDdBtn = $auctionsDd.find(".btn.dropdown-toggle"),
    $auctionsDdItem = $auctionsDd.find(".dropdown-item"),
    $progressSteps = $("#stepper"),
    $tab_active,
    $step_active,
    $btn_prev = $progressSteps.find(".prev-step"),
    $btn_next = $progressSteps.find(".next-step"),
    $searchCar = $auctionSearcher.find("#submit-search");

  // controls
  $btn_next.prop("disabled", true);

  $btn_next.on("click", async function() {
    $tab_active = $progressSteps.find(".active");
    $tab_active.removeClass("active");
    $tab_active.next().addClass("active");
    $step_active = $progressSteps.find(".is-active");
    $step_active.removeClass("is-active");
    $step_active.next().addClass("is-active");
  });

  $btn_prev.on("click", function() {
    $tab_active = $progressSteps.find(".active");
    $tab_active.removeClass("active");
    $tab_active.prev().addClass("active");
    $step_active = $progressSteps.find(".is-active");
    $step_active.removeClass("is-active");
    $step_active.prev().addClass("is-active");
    $("#results").css("display", "none");
  });
  // dropdowns
  $auctionsDdItem.on("click", function() {
    auctionDataReq.type = $(this).attr("data-value");
    $btn_next.prop("disabled", false);
    auctionDataReq.lotNum = 0;
    $("#lotNum").val("");
    $auctionsDdBtn.children().text($(this).text() || "Виберіть аукціон");
  });

  $searchCar.on("click", function() {
    getAuctionCar(auctionDataReq);
    $("#calc-loader").css("display", "flex");
  });
}
function carPrise(data) {
  let date = new Date();
  switch (data.fuelType) {
    case "B": {
      const coef = parseFloat(data.vol) <= 3000 ? 50 : 100;
      const ages = date.getFullYear() - parseInt(data.year);
      const age = (ages < 15 ? ages : 15);
      const engine = parseInt(data.vol) / 1000;
      return coef * age * engine;
    }
    case "D": {
      const coef = parseFloat(data.vol) <= 3500 ? 75 : 150;
      const ages = date.getFullYear() - parseInt(data.year);
      const age = ages < 15 ? ages : 15;
      const engine = parseInt(data.vol) / 1000;
      return coef * age * engine;
    }
    case "E":
      return parseInt(data.kvt);
    case "H":
      const coef = parseFloat(data.vol) <= 3500 ? 50 : 100;
      const ages = date.getFullYear() - parseInt(data.year);
      const age = ages < 15 ? ages : 15;
      const engine = parseInt(data.vol) / 1000;
      return coef * age * engine;
    default:
      return 0;
  }
}
function calcPrice(carData) {
  // const actualCCY = currentCurrency.find(i => i.ccy === carData.ctype),
  const { lotPrice, type } = auctionDataReq;
  const carPrice = type ? parseInt(lotPrice) : parseInt(carData.price);
  const fee = calcFee(carPrice, auctionDataReq.type);
  const invoice = carPrice + fee + 400;
  const tax = invoice * 0.1;
  const excise = carPrise(carData);

  const res = {
    carPrice,
    excise,
    tax,
    pdv: (excise + tax + invoice) * 0.2,
    broExp: carData.auction ? 900 : 0,
    tr: carData.tr || 0,
    onlAuto: carPrice ? 600 : 0,
    fee
  };
  const total = Object.values(res).reduce((t, item) => t + item, 0);
  if (carData.auction) {
    $("#car-label")
      .text(carData.label)
      .parent()
      .css("display", carData.label ? "block" : "none");
    $("#bro")
      .text(res.broExp)
      .parent()
      .css("display", res.broExp ? "block" : "none");
    $("#lot-number")
      .text(carData.lotNumber)
      .parent()
      .css("display", carData.lotNumber ? "block" : "none");
  }

  $("#online-auto")
    .text(res.onlAuto)
    .parent()
    .css("display", res.onlAuto ? "block" : "none");
  $("#car-price")
    .text(res.carPrice)
    .parent()
    .css("display", res.carPrice ? "block" : "none");
  $("#total")
    .text(total.toFixed(0))
    .parent()
    .css("display", total ? "block" : "none");
  $("#tax")
    .text(tax.toFixed(2))
    .parent()
    .css("display", tax ? "block" : "none");
  $("#excise")
    .text(excise.toFixed(2))
    .parent()
    .css("display", excise ? "block" : "none");
  $("#pdv")
    .text(res.pdv.toFixed(2))
    .parent()
    .css("display", pdv ? "block" : "none");
  $("#fee")
    .text(res.fee.toFixed(2))
    .parent()
    .css("display", res.fee ? "block" : "none");
  $("#transportation")
    .text(res.tr)
    .parent()
    .css("display", res.tr ? "block" : "none");
  $(".additional").css("display", "block");
  $("#calc-loader").css("display", "none");
  $("#results").css("display", "block");
}

const getAuctionCar = async carData => {
  const url = `http://167.71.62.234:5555/api/${carData.type}/${carData.lotNum}`;
  $("#no-results").css("display", "none");
  await fetch(url)
    .then(response => response.json())
    .then(data =>
      data
        ? calcPrice(parseData(data))
        : $("#no-results").css("display", "block")
    )
    .catch(error => {
      $("#no-results").css("display", "block");
      $("#calc-loader").css("display", "none");
      console.error("Error", error);
    });
};

const parseData = car => {
  let FT;
  switch (car.fuelType.toUpperCase()) {
    case "DIESEL":
      FT = "D";
      break;
    case "HYBRID ENGINE":
      FT = "H";
      break;
    case "ELECTRIC":
      FT = "E";
      break;
    default:
      FT = "B";
      break;
  }

  return {
    fuelType: FT,
    currency: car.cuc,
    vol: parseFloat(car.vol.slice(0, car.vol.indexOf("L"))) * 1000,
    price: car.price,
    year: car.year,
    auction: auctionDataReq.type,
    tr: car.tr,
    label: car.label
  };
};

const getFees = (price, feeRange) => {
  let res = 0;
  feeRange.forEach(fee => {
    if (price >= fee.from && price < fee.to) {
      res = parseInt(fee.price);
    }
  });
  return res;
};

const calcFee = (lotPrice, type) => {
  switch (type) {
    case "c":
      return (
        getFees(parseInt(lotPrice), Fees.copart.salePrice) +
        getFees(parseInt(lotPrice), Fees.copart.olb) +
        59 +
        39
      );
    case "i": {
      const standard = getFees(parseInt(lotPrice), Fees.iaai.standard),
        internet = getFees(parseInt(lotPrice), Fees.iaai.internetBit),
        graterRange =
          parseInt(lotPrice) > 7500 && parseInt(lotPrice) < 20000
            ? parseFloat(lotPrice) * 0.01
            : 0,
        grater = parseInt(lotPrice) > 20000 ? parseFloat(lotPrice) * 0.04 : 0;
      return standard + internet + grater + 59 + graterRange;
    }
    default:
      return 0;
  }
};
