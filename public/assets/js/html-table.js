"use strict";
// Class definition

var PCDatatableHtmlTable = function() {
    // Private functions

    // demo initializer
    var demo = function() {

		var datatable = $('#pc_datatable').KTDatatable({
			data: {
				saveState: {cookie: false},
			},
			search: {
				input: $('#pc_datatable_search_query'),
				key: 'generalSearch'
			},
            
			columns: [
				{
					field: 'Customer Name',
					//type: 'number',
                    autoHide: false,
				},
                {
					field: 'Loan ID',
					type: 'number',
                    width: 100,
				},
				{
					field: 'Created Date',
					type: 'date',
					format: 'YYYY-MM-DD',
					width: 100,
				}, {
					field: 'Status',
					title: 'Status',
					autoHide: false,
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {
                                'title': 'Pending',
                                'class': ' label-light-warning'
                            },
							2: {
                                'title': 'Completed',
                                'class': ' label-light-danger'
                            },
							3: {
                                'title': 'Canceled',
                                'class': ' label-light-primary'
                            },
							4: {
                                'title': 'Success',
                                'class': ' label-light-success'
                            },
							5: {
                                'title': 'Process',
                                'class': ' label-light-info'
                            },
							6: {
                                'title': 'Resolve',
                                'class': ' label-light-danger'
                            },
							7: {
                                'title': 'Process',
                                'class': ' label-light-warning'
                            }
						};
						return '<span class="label font-weight-bold label-lg' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
					},
				}, {
					field: 'Type',
					title: 'Type',
					autoHide: false,
					// callback function support for column rendering
					template: function(row) {
						var status = {
							1: {
                                'title': 'Online',
                                'state': 'danger'
                            },
							2: {
                                'title': 'Retail',
                                'state': 'primary'
                            },
							3: {
                                'title': 'Direct',
                                'state': 'success'
                            },
						};
						return '<span class="label label-' + status[row.Type].state + ' label-dot mr-2"></span><span class="font-weight-bold text-' +status[row.Type].state + '">' +	status[row.Type].title + '</span>';
					},
				},
			],
		});




    };

    return {
        // Public functions
        init: function() {
            // init dmeo
            demo();
        },
    };
}();

jQuery(document).ready(function() {
	PCDatatableHtmlTable.init();
});
