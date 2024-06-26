
// Document ready function
// Define variables in the global scope
var teamsAveragesTable;
var knicksPlayersLogsTable;
var avgsFromLogsTable

// Document ready function for initialization
$(document).ready(function() {
    teamsAveragesTable = $('#teamsAveragesTable').DataTable({
      // Optional: Add DataTable configuration options here
        "lengthChange": false,    
        "pageLength": -1,
        "autoWidth": true,
        "paging": false,
        "searching": false,
        "info": false,
        "columnDefs": [
            {
                "targets": [5, 6, 8, 10, 12, 13, 14, 15], // Replace with the actual index of numeric columns
                "render": function ( data, type, row ) {
                    return type === 'display' || type === 'filter' ?
                        parseFloat(data).toFixed(2) : // Format for display and filter types
                        data; // Keep original for other types (like sorting)\
                }
            },
            {
                "targets": [7,9,11], // Replace with the actual index of numeric columns
                "render": function ( data, type, row ) {
                    return type === 'display' || type === 'filter' ?
                        parseFloat(data).toFixed(4) : // Format for display and filter types
                        data; // Keep original for other types (like sorting)\
                }
            }
        ],
    }),

    knicksPlayerTable = $('#knicksPlayersLogsTable').DataTable({
        "lengthChange": false,    
        "pageLength": -1,
        "autoWidth": true,
        "paging": false,
        "searching": false,
        "info": false,
        "columnDefs": [
            {
                "targets": [1],
                "render": function(data, type, row) {
                    if(type == 'display' || type == 'filter') {
                        var date = new Date(data);
                        var day = ("0" + date.getDate()).slice(-2);
                        var month = ("0" + (date.getMonth() + 1)).slice(-2);
                        var year = date.getFullYear();
                        return month + '/' + day + '/' + year;
                    }
                    return data;
                }
            },
            {
                "targets": [9, 11, 13], // Replace with the actual index of numeric columns
                "render": function ( data, type, row ) {
                    return type === 'display' || type === 'filter' ?
                        parseFloat(data).toFixed(2) : // Format for display and filter types
                        data; // Keep original for other types (like sorting)\
                }
            },
        ]
    }),

    avgsFromLogsTable = $('#avgsFromLogsTable').DataTable({
        "lengthChange": false,    
        "pageLength": -1,
        "autoWidth": true,
        "paging": false,
        "searching": false,
        "info": false,
        "columnDefs": [
            {
                "targets": 1, // Index of the column containing time data
                "render": function ( data, type, row ) {
                    data=data/10000;
                    return type === 'display' || type === 'filter' ?
                        parseFloat(data).toFixed(2) : // Format for display and filter types
                        data; // Keep original for other types (like sorting)\
                }
            },
            {
                "targets": [3, 5, 7], // Replace with the actual index of numeric columns
                "render": function ( data, type, row ) {
                    return type === 'display' || type === 'filter' ?
                        parseFloat(data).toFixed(4) : // Format for display and filter types
                        data; // Keep original for other types (like sorting)\
                }
            },
            {
                "targets": [2, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15], // Replace with the actual index of numeric columns
                "render": function ( data, type, row ) {
                    return type === 'display' || type === 'filter' ?
                        parseFloat(data).toFixed(2) : // Format for display and filter types
                        data; // Keep original for other types (like sorting)\
                }
            }
        ]
    }),

    teamLogsTable = $('#teamLogsTable').DataTable({
        "lengthChange": false,    
        "pageLength": -1,
        "autoWidth": true,
        "paging": false,
        "searching": false,
        "info": false,
        "columnDefs": [
            {
                "targets": [0],
                "render": function(data, type, row) {
                    if(type == 'display' || type == 'filter') {
                        var date = new Date(data);
                        var day = ("0" + date.getDate()).slice(-2);
                        var month = ("0" + (date.getMonth() + 1)).slice(-2);
                        var year = date.getFullYear();
                        return month + '/' + day + '/' + year;
                    }
                    return data;
                }
            },
            {
                "targets": [7,9,11],
                "render": function ( data, type, row ) {
                    return type === 'display' || type === 'filter' ?
                        parseFloat(data).toFixed(3) : // Format for display and filter types
                        data; // Keep original for other types (like sorting)\
            }
        }
        ]
    }),

    teamLogAveragesTable = $('#teamLogAveragesTable').DataTable({
        "lengthChange": false,    
        "pageLength": -1,
        "autoWidth": true,
        "paging": false,
        "searching": false,
        "info": false,
        "columnDefs": [
            {
                "targets": [0,1,2,4,6,8,9,10,11,12,13,14], // Replace with the actual index of numeric columns
                "render": function ( data, type, row ) {
                    return type === 'display' || type === 'filter' ?
                        parseFloat(data).toFixed(2) : // Format for display and filter types
                        data; // Keep original for other types (like sorting)\
                }
            },
            {
                "targets": [3,5,7], // Replace with the actual index of numeric columns
                "render": function ( data, type, row ) {
                    return type === 'display' || type === 'filter' ?
                        parseFloat(data).toFixed(4) : // Format for display and filter types
                        data; // Keep original for other types (like sorting)\
                }
            }
        ],
    }),

    oppLogsTable = $('#oppLogsTable').DataTable({
        "lengthChange": false,    
        "pageLength": -1,
        "autoWidth": true,
        "paging": false,
        "searching": false,
        "info": false,
        "columnDefs": [
            {
                "targets": [0],
                "render": function(data, type, row) {
                    if(type == 'display' || type == 'filter') {
                        var date = new Date(data);
                        var day = ("0" + date.getDate()).slice(-2);
                        var month = ("0" + (date.getMonth() + 1)).slice(-2);
                        var year = date.getFullYear();
                        return month + '/' + day + '/' + year;
                    }
                    return data;
                }
            },
            {
                "targets": [3,5,7],
                "render": function ( data, type, row ) {
                    return type === 'display' || type === 'filter' ?
                        parseFloat(data).toFixed(3) : // Format for display and filter types
                        data; // Keep original for other types (like sorting)\
            }
        }
        ]
    }),

    oppLogAveragesTable = $('#oppLogAveragesTable').DataTable({
        "lengthChange": false,    
        "pageLength": -1,
        "autoWidth": true,
        "paging": false,
        "searching": false,
        "info": false,
        "columnDefs": [
            {
                "targets": [0,2,4,6,7,8,9,10,11,12], // Replace with the actual index of numeric columns
                "render": function ( data, type, row ) {
                    return type === 'display' || type === 'filter' ?
                        parseFloat(data).toFixed(2) : // Format for display and filter types
                        data; // Keep original for other types (like sorting)\
                }
            },
            {
                "targets": [1,3,5], // Replace with the actual index of numeric columns
                "render": function ( data, type, row ) {
                    return type === 'display' || type === 'filter' ?
                        parseFloat(data).toFixed(4) : // Format for display and filter types
                        data; // Keep original for other types (like sorting)\
                }
            }
        ],
    }),

    playerByTeamTable = $('#playerByTeamTable').DataTable({
        "lengthChange": false,    
        "pageLength": -1,
        "autoWidth": true,
        "paging": false,
        "searching": false,
        "info": false,
        "columnDefs": [
            {
                "targets": [4,5,6,7,8,9,10,12,14,16], // Replace with the actual index of numeric columns
                "render": function ( data, type, row ) {
                    return type === 'display' || type === 'filter' ?
                        parseFloat(data).toFixed(2) : // Format for display and filter types
                        data; // Keep original for other types (like sorting)\
                }
            },
            {
                "targets": [11,13,15], // Replace with the actual index of numeric columns
                "render": function ( data, type, row ) {
                    return type === 'display' || type === 'filter' ?
                        parseFloat(data).toFixed(4) : // Format for display and filter types
                        data; // Keep original for other types (like sorting)\
                }
            }
        ],
    })
  });
  


/*
logsTable = $('#logsTable').DataTable({
    "lengthChange": false,    
    "pageLength": -1,
    "autoWidth": true,
    "paging": false,
    "searching": false,
    "info": false,
});

averagesTable = $('#averagesTable').DataTable({
    "columnDefs": [
    { 
        // Apply this to each numeric column you want to format
        "targets": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], // Replace with the actual index of numeric columns
        "render": function ( data, type, row ) {
            return type === 'display' || type === 'filter' ?
                parseFloat(data).toFixed(2) : // Format for display and filter types
                data; // Keep original for other types (like sorting)
        }
    }
],
    "lengthChange": false,
    "pageLength": -1,
    "paging": false,
    "searching": false,
    "ordering": false,
    "info": false,
});

teamsTable = $('#teamsTable').DataTable({
    "lengthChange": false,
    "pageLength": -1,
    "paging": false,
    "searching": false,
    "ordering": false,
    "info": false,
    "autoWidth": true,
});
*/