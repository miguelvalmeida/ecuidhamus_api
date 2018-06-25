const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const forms_db = require('../../../db2_connection');

//meals
exports.average_meals = (req, res, next) => {
    const years = req.params.year.split(',');
    const meals_query = 'CALL averageMeals(?,?)';
    forms_db.query(meals_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_meals = (req, res, next) => {
    const years = req.params.year.split(',');
    const meals_query = 'CALL depAverageMeals(?,?,?)';
    forms_db.query(meals_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.meals_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL mealsByGender(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_meals_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL mealsByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.meals_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL mealsByAge(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_meals_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL mealsByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

//breakfast
exports.average_breakfast = (req, res, next) => {
    const years = req.params.year.split(',');
    const breakfast_query = 'CALL averageBreakfast(?,?)';
    forms_db.query(breakfast_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_breakfast = (req, res, next) => {
    const years = req.params.year.split(',');
    const breakfast_query = 'CALL depAverageBreakfast(?,?,?)';
    forms_db.query(breakfast_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.breakfast_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL breakfastByGender(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_breakfast_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL breakfastByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.breakfast_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL breakfastByAge(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_breakfast_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL breakfastByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

//fruits
exports.average_fruits = (req, res, next) => {
    const years = req.params.year.split(',');
    const fruits_query = 'CALL averageFruits(?,?)';
    forms_db.query(fruits_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_fruits = (req, res, next) => {
    const years = req.params.year.split(',');
    const fruits_query = 'CALL depAverageFruits(?,?,?)';
    forms_db.query(fruits_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.fruits_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL fruitsByGender(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_fruits_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL fruitsByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.fruits_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL fruitsByAge(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_fruits_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL fruitsByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

//vegetables
exports.average_vegetables = (req, res, next) => {
    const years = req.params.year.split(',');
    const vegetables_query = 'CALL averageVegetables(?,?)';
    forms_db.query(vegetables_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_vegetables = (req, res, next) => {
    const years = req.params.year.split(',');
    const vegetables_query = 'CALL depAverageVegetables(?,?,?)';
    forms_db.query(vegetables_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.vegetables_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL vegetablesByGender(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_vegetables_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL vegetablesByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.vegetables_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL vegetablesByAge(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_vegetables_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL vegetablesByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

//fast food
exports.average_fast_food = (req, res, next) => {
    const years = req.params.year.split(',');
    const fast_food_query = 'CALL averageFastfood(?,?)';
    forms_db.query(fast_food_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_fast_food = (req, res, next) => {
    const years = req.params.year.split(',');
    const fast_food_query = 'CALL depAverageFastfood(?,?,?)';
    forms_db.query(fast_food_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.fast_food_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL fastFoodByGender(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_fast_food_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL fastFoodByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.fast_food_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL fastFoodByAge(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_fast_food_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL fastFoodByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

//sodas
exports.average_sodas = (req, res, next) => {
    const years = req.params.year.split(',');
    const sodas_query = 'CALL averageSodas(?,?)';
    forms_db.query(sodas_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_sodas = (req, res, next) => {
    const years = req.params.year.split(',');
    const sodas_query = 'CALL depAverageSodas(?,?,?)';
    forms_db.query(sodas_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.sodas_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL sodasByGender(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_sodas_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL sodasByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.sodas_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL sodasByAge(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_sodas_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL sodasByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

//alcohol
exports.average_alcohol = (req, res, next) => {
    const years = req.params.year.split(',');
    const alcohol_query = 'CALL averageAlcohol(?,?)';
    forms_db.query(alcohol_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_alcohol = (req, res, next) => {
    const years = req.params.year.split(',');
    const alcohol_query = 'CALL depAverageAlcohol(?,?,?)';
    forms_db.query(alcohol_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.alcohol_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL alcoholByGender(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_alcohol_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL alcoholByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.alcohol_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL alcoholByAge(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_alcohol_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL alcoholByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

//beer
exports.average_beer = (req, res, next) => {
    const years = req.params.year.split(',');
    const beer_query = 'CALL averageBeer(?,?)';
    forms_db.query(beer_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_beer = (req, res, next) => {
    const years = req.params.year.split(',');
    const beer_query = 'CALL depAverageBeer(?,?,?)';
    forms_db.query(beer_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.beer_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL beerByGender(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_beer_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL beerByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.beer_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL beerByAge(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_beer_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL beerByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

//wine
exports.average_wine = (req, res, next) => {
    const years = req.params.year.split(',');
    const wine_query = 'CALL averageWine(?,?)';
    forms_db.query(wine_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_wine = (req, res, next) => {
    const years = req.params.year.split(',');
    const wine_query = 'CALL depAverageWine(?,?,?)';
    forms_db.query(wine_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.wine_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL wineByGender(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_wine_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL wineByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.wine_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL wineByAge(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_wine_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL wineByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

//spirit drinks
exports.average_spirit_drinks = (req, res, next) => {
    const years = req.params.year.split(',');
    const spirit_drinks_query = 'CALL averageSpiritDrinks(?,?)';
    forms_db.query(spirit_drinks_query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.dep_average_spirit_drinks = (req, res, next) => {
    const years = req.params.year.split(',');
    const spirit_drinks_query = 'CALL depAverageSpiritDrinks(?,?,?)';
    forms_db.query(spirit_drinks_query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results[0]
            })
        }
    })
};

exports.spirit_drinks_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL spiritDrinksByGender(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_spirit_drinks_by_gender = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL spiritDrinksByGenderDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.spirit_drinks_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL spiritDrinksByAge(?,?)';
    forms_db.query(query, [years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};

exports.dep_spirit_drinks_by_age = (req, res, next) => {
    const years = req.params.year.split(',');
    const query = 'CALL spiritDrinksByAgeDep(?,?,?)';
    forms_db.query(query, [req.params.department, years[0], years[1]], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                message: results
            })
        }
    })
};