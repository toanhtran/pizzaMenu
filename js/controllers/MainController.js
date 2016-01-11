app.controller('MainController', ['$scope', function ($scope) {
    $scope.today = new Date();

    $scope.appetizers = [
        {
            name: 'Caprese',
            description: 'Fresh mozzarella, organic tomatoes, basil, balsmaic glaze.',
            price: 4.95
    },
        {
            name: 'Chile Lime Chicken Wings',
            description: 'Tangy spicy wings seasoned with zesty citrus and hot chile peppers.',
            price: 6.95
    },
        {
            name: 'Shrimp-Stuffed Mushrooms',
            description: 'savory shrimp filling in mushrooms',
            price: 4.95
    }
  ];
    $scope.mains = [
        {
            name: 'Spinach Frittata with Guacamole & Salsa',
            description: 'spinach and shallot frittata topped with savory guacamole and salsa.',
            price: 14.95
    },
        {
            name: 'Eggplant Parm',
            description: 'Breaded Eggplant, with parm cheese and sauce.',
            price: 13.95
    },
        {
            name: 'House Special Pizza',
            description: 'Our house speciality hand toss pizza.',
            price: 9.95
    }

  ];
    $scope.extras = [
        {
            name: 'Pistachio Gelato',
            description: 'Yummy creamy sweet nutty goodness in a chocolate cup',
            price: 6.95
    },
        {
            name: 'Tiramasu',
            description: 'lady fingers soaked in espresso and covered is fluffly sweet cream sauce.',
            price: 7.95
    }

  ];

}]);
