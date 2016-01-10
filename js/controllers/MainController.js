app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  $scope.mains = [
    {
      name: 'Veal',
      description: 'Veal, tomatoes, basil, balsmaic glaze.',
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
      description: 'Yummy creamy sweet nutty goodness',
      price: 4.95
    },
    {
      name: 'Tiramasu',
      description: 'lady fingers soaked in espresso and covered is fluffly sweet cream sauce.',
      price: 13.95
    }
  
  ];

}]);