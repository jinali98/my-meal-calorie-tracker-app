<!-- this is to get food nutrition amount -->

https://api.edamam.com/api/food-database/v2/parser?app_id=2f60b8d7&app_key=0130641d530079875d39d91010599846&ingr=cake&nutrition-type=cooking

<!-- List of food objects, with each food object containing: kcal per 100gr, protein per 100 grams, carbohydrates per 100 grams, brand of the food, if the food is generic or brandid, a list of existing measures for the food, contents label of the food -->

////////////////////////////////////
nutrition analysis api
https://developer.edamam.com/edamam-docs-nutrition-api

<!-- api to get cal level for a given food item with amount  -->

<!-- find out cal amount in foods  %20 == of -->
<!-- 70g of rice m-->

https://api.edamam.com/api/nutrition-data?app_id=cd6e9866&app_key=808ab0b603f4226963a02046862ba736&nutrition-type=cooking&ingr=70g%20rice

<!-- 70g of rice AND 80g of fish -->
<!-- %2C = , -->

https://api.edamam.com/api/nutrition-data?app_id=cd6e9866&app_key=808ab0b603f4226963a02046862ba736&nutrition-type=cooking&ingr=70g%20rice%2C80g%20fish

///////////////////////////////////
receipe serach api
https://developer.edamam.com/edamam-docs-recipe-api

<!-- search receipes balanced and alchohol free receipes by meal type lunch, dinner, breakfast  -->
<!-- add different colors to receipe cards according to the meal type -->
<!-- by clicking each receipe card user can view the full receipe -->
<!-- allow to add receipes to receipe book - store in the local storage -->

https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=7200a6f3&app_key=3324206cfcb6ba02b27f9729b3209459&diet=balanced&health=alcohol-free&mealType=Breakfast&imageSize=REGULAR

//
store amount of fat, protein and carb and calulate the amount of calories
users can find out cal in each food item per amount of grams

//home landing page
https://www.myfitnesspal.com/
https://www.wikihow.com/Calculate-Food-Calories

navigation
home
store-cal == track your daily cal count
cook-book == add your fav receipes to view later
find -receipes == search over 1M food receipes in out database
find-cal-amount == learn about calorie count and nutrition information per serving size.
