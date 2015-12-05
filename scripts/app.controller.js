angular.module('app')
    .controller('appCtrl', ['$scope', function ($scope) {
        $scope.itemTypes = [
            "Name", "String", "Integer", "Date"
        ];
        $scope.count = 5;
        $scope.items = [
            {
                title: '',
                type: ''
            }
        ];
        $scope.AddItem = function () {
            $scope.items.push({title: '', type: ''});
        }

        $scope.GeneratorJson = function () {
            var result_json = [];
            for (var i = 0, len = $scope.count; i < len; i++) {
                var _item = {};
                for (var j = 0, jlen = $scope.items.length; j < jlen; j++) {
                    var __item = $scope.items[j];
                    _item[__item.title] = changeFunction(__item);
                }

                result_json.push(_item);
            }
            $scope.resultJson = result_json;
        }

        function changeFunction(item) {
            var _function = {
                "Name": function () {
                    return chance.name()
                },
                "String": function () {
                    return chance.word()
                },
                "Integer": function () {
                    return chance.integer({min: item.min || 0, max: item.max || 200});
                },
                "Date": function () {
                    var _options = {
                        string: true
                    }
                    if(item.year) { _options['year'] = item.year; }
                    if(item.month) { _options['month'] = item.month; }
                    return chance.date(_options);
                }
            }
            return _function[item.type]();
        }

    }]);