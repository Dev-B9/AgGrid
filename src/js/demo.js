require([
    "ojs/ojcore",
    "knockout",
    "ojs/ojbootstrap",
    "ojs/ojarraydataprovider",
    "ojs/ojknockout",
    "ojs/ojtable",
], function (oj, ko, ojbootstrap_1, ArrayDataProvider) {
    class DataGridViewModel {
        constructor() {
            this.jsonData = [
                {
                    "WOMEMNACOUNT" : 0,
                    "MENACOUNT" : 1,
                    "ID_DEPARTAMENT" : 4,
                    "DEPARTAMENT" : "02 - Colón",
                    "ID_TOWN" : 9,
                    "TOWN" : "01 - Trujillo",
                    "INSCRIPTIONTYPE" : "NACIMIENTOS",
                    "INSCRIPTION_ID" : 1,
                    "DESCRIPTION" : "Normal",
                    "USERGENERATED" : "user_rnp",
                    "INSCRIPTIONDATE" : "1969-07-13T05:00:00.000Z"
                  },
                  {
                    "WOMEMNACOUNT" : 1,
                    "MENACOUNT" : 0,
                    "ID_DEPARTAMENT" : 3,
                    "DEPARTAMENT" : "01 - Atlántida",
                    "ID_TOWN" : 5,
                    "TOWN" : "09 - La Ceiba",
                    "INSCRIPTIONTYPE" : "NACIMIENTOS",
                    "INSCRIPTION_ID" : 1,
                    "DESCRIPTION" : "Normal",
                    "USERGENERATED" : "user_rnp",
                    "INSCRIPTIONDATE" : "2003-07-31T05:00:00.000Z"
                  },
                  {
                    "WOMEMNACOUNT" : 1,
                    "MENACOUNT" : 1,
                    "ID_DEPARTAMENT" : 3,
                    "DEPARTAMENT" : "01 - Atlántida",
                    "ID_TOWN" : 5,
                    "TOWN" : "09 - La Ceiba",
                    "INSCRIPTIONTYPE" : "NACIMIENTOS",
                    "INSCRIPTION_ID" : 1,
                    "DESCRIPTION" : "Normal",
                    "USERGENERATED" : "administrador",
                    "INSCRIPTIONDATE" : "2023-07-10T05:00:00.000Z"
                  },
                  {
                    "WOMEMNACOUNT" : 0,
                    "MENACOUNT" : 1,
                    "ID_DEPARTAMENT" : 3,
                    "DEPARTAMENT" : "01 - Atlántida",
                    "ID_TOWN" : 5,
                    "TOWN" : "09 - La Ceiba",
                    "INSCRIPTIONTYPE" : "NACIMIENTOS",
                    "INSCRIPTION_ID" : 1,
                    "DESCRIPTION" : "Normal",
                    "USERGENERATED" : "user_rnp",
                    "INSCRIPTIONDATE" : "2023-06-06T05:00:00.000Z"
                  },
                  {
                    "WOMEMNACOUNT" : 0,
                    "MENACOUNT" : 1,
                    "ID_DEPARTAMENT" : 3,
                    "DEPARTAMENT" : "01 - Atlántida",
                    "ID_TOWN" : 5,
                    "TOWN" : "09 - La Ceiba",
                    "INSCRIPTIONTYPE" : "NACIMIENTOS",
                    "INSCRIPTION_ID" : 1,
                    "DESCRIPTION" : "Normal",
                    "USERGENERATED" : "administrador",
                    "INSCRIPTIONDATE" : "2023-07-11T05:00:00.000Z"
                  },
                  {
                    "WOMEMNACOUNT" : 1,
                    "MENACOUNT" : 0,
                    "ID_DEPARTAMENT" : 3,
                    "DEPARTAMENT" : "01 - Atlántida",
                    "ID_TOWN" : 5,
                    "TOWN" : "09 - La Ceiba",
                    "INSCRIPTIONTYPE" : "NACIMIENTOS",
                    "INSCRIPTION_ID" : 2,
                    "DESCRIPTION" : "Reinscripción",
                    "USERGENERATED" : "user_rnp",
                    "INSCRIPTIONDATE" : "2023-06-06T05:00:00.000Z"
                  },
                  {
                    "WOMEMNACOUNT" : 1,
                    "MENACOUNT" : 0,
                    "ID_DEPARTAMENT" : 4,
                    "DEPARTAMENT" : "02 - Colón",
                    "ID_TOWN" : 9,
                    "TOWN" : "01 - Trujillo",
                    "INSCRIPTIONTYPE" : "NACIMIENTOS",
                    "INSCRIPTION_ID" : 1,
                    "DESCRIPTION" : "Normal",
                    "USERGENERATED" : "user_rnp",
                    "INSCRIPTIONDATE" : "2023-06-29T05:00:00.000Z"
                  },
                  {
                    "WOMEMNACOUNT" : 0,
                    "MENACOUNT" : 1,
                    "ID_DEPARTAMENT" : 1,
                    "DEPARTAMENT" : "05 - Antioquia",
                    "ID_TOWN" : 1,
                    "TOWN" : "01 - Medellin",
                    "INSCRIPTIONTYPE" : "NACIMIENTOS",
                    "INSCRIPTION_ID" : 1,
                    "DESCRIPTION" : "Normal",
                    "USERGENERATED" : "user_rnp",
                    "INSCRIPTIONDATE" : "2024-06-15T05:00:00.000Z"
                  },
                  {
                    "WOMEMNACOUNT" : 0,
                    "MENACOUNT" : 1,
                    "ID_DEPARTAMENT" : 3,
                    "DEPARTAMENT" : "01 - Atlántida",
                    "ID_TOWN" : 5,
                    "TOWN" : "09 - La Ceiba",
                    "INSCRIPTIONTYPE" : "NACIMIENTOS",
                    "INSCRIPTION_ID" : 1,
                    "DESCRIPTION" : "Normal",
                    "USERGENERATED" : "user_rnp",
                    "INSCRIPTIONDATE" : "2023-07-04T05:00:00.000Z"
                  },
                  {
                    "WOMEMNACOUNT" : 0,
                    "MENACOUNT" : 1,
                    "ID_DEPARTAMENT" : 3,
                    "DEPARTAMENT" : "01 - Atlántida",
                    "ID_TOWN" : 5,
                    "TOWN" : "09 - La Ceiba",
                    "INSCRIPTIONTYPE" : "NACIMIENTOS",
                    "INSCRIPTION_ID" : 1,
                    "DESCRIPTION" : "Normal",
                    "USERGENERATED" : "user_rnp",
                    "INSCRIPTIONDATE" : "2000-01-01T05:00:00.000Z"
                  },
                  {
                    "WOMEMNACOUNT" : 0,
                    "MENACOUNT" : 1,
                    "ID_DEPARTAMENT" : 4,
                    "DEPARTAMENT" : "02 - Colón",
                    "ID_TOWN" : 9,
                    "TOWN" : "01 - Trujillo",
                    "INSCRIPTIONTYPE" : "NACIMIENTOS",
                    "INSCRIPTION_ID" : 1,
                    "DESCRIPTION" : "Normal",
                    "USERGENERATED" : "user_rnp",
                    "INSCRIPTIONDATE" : "1971-09-12T05:00:00.000Z"
                  }
                // Agrega el resto de tus datos aquí
            ];
        
            // Obtener años únicos, MENACOUNT y WOMEMNACOUNT para crear los encabezados dinámicos
            this.inscriptionDates = this.getUniqueValues("INSCRIPTIONDATE").map(date => date.substring(0, 10));
            this.menCounts = this.getUniqueValues("MENACOUNT");
            this.womenCounts = this.getUniqueValues("WOMEMNACOUNT");

            // Configurar la estructura de columnas para ag-Grid
            // suppressSizeToFit ancho automatico
            this.columnDefs = [
                // Encabezado "Departamento"
                {
                    headerName: "Departamento",
                    field: "DEPARTAMENT",
                    suppressSizeToFit: true,
                    filter: 'agTextColumnFilter',
                },
                // Encabezado "Municipio"
                {
                    headerName: "Municipio",
                    field: "TOWN",
                    suppressSizeToFit: true,
                    filter: 'agTextColumnFilter',
                },
                // Encabezado "Tipo De Inscripcion"
                {
                    headerName: "Tipo De Inscripcion",
                    field: "INSCRIPTIONTYPE",
                    suppressSizeToFit: true,
                    
                },
                // Encabezado "Descripcion de inscripcion"
                {
                    headerName: "Descripcion de inscripcion",
                    field: "DESCRIPTION",
                    suppressSizeToFit: true,
                },
                // Encabezados de fechas de inscripción con información de MENACOUNT y WOMEMNACOUNT
                ...this.inscriptionDates.map(date => ({
                    headerName: date,
                    headerClass: "header-years-scroll",
                    children: [
                        {
                            headerName: "MENACOUNT",
                            field: date + "-MENACOUNT",
                            suppressSizeToFit: true,
                            headerClass: "header-city-year",
                        },
                        {
                            headerName: "WOMEMNACOUNT",
                            field: date + "-WOMEMNACOUNT",
                            suppressSizeToFit: true,
                            headerClass: "header-city-year",
                        },
                    ],
                })),
            ];

            // Transformar datos para que MENACOUNT y WOMEMNACOUNT estén en la misma fila
            this.rowData = this.transformData(this.jsonData);

            // Configurar la fuente de datos para ag-Grid
            this.gridOptions = {
                defaultColDef: {
                    sortable: true,
                    resizable: true,
                    filter: true,
                  },
                columnDefs: this.columnDefs,
                rowData: this.rowData,
                animateRows: true,
         
                pagination: true,
                paginationPageSize: 10, // Cantidad de filas por página
            };
        }

        getUniqueValues(field) {
            // Obtener valores únicos del arreglo jsonData para el campo especificado
            const values = this.jsonData.map(item => item[field]);
            return [...new Set(values)];
        }

        transformData() {
            // Creamos un objeto para almacenar los datos agrupados por índice
            const dataByIndex = {};
        
            this.jsonData.forEach(item => {
                const { INSCRIPTIONDATE, ...rest } = item;
                const key = JSON.stringify(rest); // Convertimos el objeto (sin INSCRIPTIONDATE) en una cadena para usarlo como clave
        
                // Si no existe una entrada para el índice, la creamos
                if (!dataByIndex[key]) {
                    dataByIndex[key] = {
                        ...rest,
                    };
                }
      
            });
        
            // Convertimos el objeto en un array de filas
            return Object.values(dataByIndex);
        }
    }

    (0, ojbootstrap_1.whenDocumentReady)().then(() => {
        // Crea una instancia del ViewModel
        const viewModel = new DataGridViewModel();

        // Aplica las vinculaciones de Knockout al ViewModel y al elemento con ID 'datagrid-container'
        ko.applyBindings(viewModel, document.getElementById("datagrid-container"));

        // Inicializa ag-Grid en el contenedor con el id 'datagrid-container'
        new agGrid.Grid(document.getElementById("datagrid-container"), viewModel.gridOptions);
    });
});