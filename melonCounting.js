"use strict";

const melons_to_add = [
  "Ogen",
  "Horned Melon",
  "Watermelon",
  "Casaba",
  "Sharlyn",
  "Xigua",
  "Ogen",
  "Christmas",
  "Christmas",
  "Christmas",
  "Christmas",
  "Watermelon",
  "Sharlyn",
  "Xigua",
  "Cantaloupe",
  "Christmas",
  "Watermelon",
  "Christmas",
  "Sharlyn",
  "Christmas",
  "Cantaloupe",
  "Casaba",
  "Cantaloupe",
  "Santa Claus",
  "Horned Melon",
  "Watermelon",
  "Ogen",
  "Horned Melon",
  "Cantaloupe",
  "Xigua",
  "Horned Melon",
  "Sharlyn",
  "Horned Melon",
  "Sharlyn",
  "Cantaloupe",
  "Christmas",
  "Horned Melon",
  "Horned Melon",
  "Horned Melon",
  "Xigua",
  "Xigua",
  "Watermelon",
  "Cantaloupe",
  "Casaba",
  "Cantaloupe",
  "Casaba",
  "Watermelon",
  "Santa Claus",
  "Casaba"
];

function countMelons(melon_array) {
  const melon_counts = {};

  for (i = 0; i < melon_array.length; i++) {
    melon = melon_array[i];
    if (melon_counts[melon]) {
      melon_counts[melon] += 1;
    } else {
      melon_counts[melon] = 1;
    }
  }

  return melon_counts;
}

console.log(countMelons(melons_to_add));
