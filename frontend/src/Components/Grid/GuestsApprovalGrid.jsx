import { useRef, useState, useEffect, useMemo } from "react";
// Ag-grid imports
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import { NameCellRenderer } from "./cellRenderers";
import { nameValueFormatter } from "./valueFormatters";
// Npm imports
import axios from "axios";
import { useSelector } from "react-redux";

const GuestsApprovalGrid = () => {
  const gridRef = useRef();
  const [gridApi, setGridApi] = useState();
  const [rowData, setRowData] = useState([]);
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { token: adminToken } = userLogin.user;

  const columns = [
    { headerName: "Email", field: "email" },
    {
      headerName: "Name",
      field: "name",
      cellRenderer: NameCellRenderer,
      valueGetter: (params) => {
        return `${params.data.name.firstName} ${params.data.name.lastName}`;
      },
    },
    {
      headerName: "College Registration Number",
      field: "collegeRegistrationNumber",
    },
    { headerName: "Mobile No.", field: "mobileNumber" },
  ];

  const defColumnDefs = useMemo(
    () => ({ flex: 1, filter: true, suppressMenu: true }),
    []
  );

  const sideBar = useMemo(() => {
    return {
      toolPanels: [
        {
          id: "columns",
          labelDefault: "Columns",
          labelKey: "columns",
          iconKey: "columns",
          toolPanel: "agColumnsToolPanel",
          toolPanelParams: {
            suppressPivotMode: true,
            suppressRowGroups: true,
            suppressValues: true,
            suppressColumnFilter: false,
            suppressColumnSelectAll: false,
          },
        },
        {
          id: "filters",
          labelDefault: "Filters",
          labelKey: "filters",
          iconKey: "filter",
          toolPanel: "agFiltersToolPanel",
          toolPanelParams: {
            suppressFilterSearch: true,
            suppressExpandAll: true,
          },
        },
        {
          id: "QuickSearch",
          labelDefault: "Quick Search",
          labelKey: "QuickSearch",
          iconKey: "menu",
          toolPanel: () => (
            <div>
              <h4>Global Search</h4>
              <input
                placeholder="Search..."
                type="search"
                style={{
                  width: 190,
                  height: 35,
                  outline: "none",
                  border: "none",
                  borderBottom: `1px #181616 solid`,
                  padding: `0 5px`,
                }}
                onChange={applyQuickFilter}
              />
            </div>
          ),
        },
      ],
      hiddenByDefault: true,
      defaultToolPanel: "Filters",
      // position: "right",
    };
  }, []);

  // On component mount
  useEffect(() => {}, []);

  // Toggling sidebar
  useEffect(() => {
    if (gridApi) {
      gridApi.setSideBarVisible(sideBarVisible);
      gridApi.openToolPanel("filters");
    }
  }, [sideBarVisible]);

  const onGridReady = (params) => {
    const getGuestsData = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${adminToken}`,
          },
        };

        console.log(adminToken);
        const { data } = await axios.get("/api/guests", config);
        console.log("guestsData: ", data);
        setRowData(data);
      } catch (error) {
        alert("Error in GuestsApprovalGrid", error.message);
      }
    };

    console.log("in onGrid ready");
    getGuestsData();
    setGridApi(params.api);
  };

  const applyQuickFilter = (e) => {
    const searchText = e.target.value;
    gridApi.api.setQuickFilter(searchText);
  };
  return (
    <div style={{ height: "100%", width: "80%", margin: "auto" }}>
      <button
        onClick={() => {
          setSideBarVisible((prev) => !prev);
        }}
      >
        Toggle Sidebar
      </button>

      <div className="ag-theme-alpine" style={{ height: "100%" }}>
        <AgGridReact
          rowData={rowData}
          ref={gridRef}
          columnDefs={columns}
          defaultColDef={defColumnDefs}
          onGridReady={onGridReady}
          sideBar={sideBar}
        />
      </div>
    </div>
  );
};

export default GuestsApprovalGrid;
