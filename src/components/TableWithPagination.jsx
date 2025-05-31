import React, { useState, useMemo } from "react";

const TableWithPagination = ({ data, columns, rowsPerPage = 5 }) => {
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [filters, setFilters] = useState({});

  //   // Handle filter input changes
  //   const handleFilterChange = (e, accessor) => {
  //     setFilters({ ...filters, [accessor]: e.target.value.toLowerCase() });
  //     setCurrentPage(1); // reset to first page when filter changes
  //   };

  //   // Apply filters
  //   const filteredData = useMemo(() => {
  //     return data.filter((row) =>
  //       columns.every((col) => {
  //         const filterValue = filters[col.accessor];
  //         if (!filterValue) return true;
  //         return String(row[col.accessor]).toLowerCase().includes(filterValue);
  //       })
  //     );
  //   }, [data, filters, columns]);

  //   // Pagination logic
  //   const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  //   const paginatedData = useMemo(() => {
  //     const start = (currentPage - 1) * rowsPerPage;
  //     return filteredData.slice(start, start + rowsPerPage);
  //   }, [filteredData, currentPage, rowsPerPage]);

  //   return (
  //     <div>
  //       <table
  //         border="1"
  //         cellPadding="10"
  //         style={{ width: "100%", borderCollapse: "collapse" }}
  //       >
  //         <thead>
  //           <tr>
  //             {columns.map((col) => (
  //               <th key={col.accessor}>
  //                 {col.header}
  //                 <div>
  //                   <input
  //                     type="text"
  //                     placeholder={`Filter ${col.header}`}
  //                     value={filters[col.accessor] || ""}
  //                     onChange={(e) => handleFilterChange(e, col.accessor)}
  //                     style={{ width: "90%" }}
  //                   />
  //                 </div>
  //               </th>
  //             ))}
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {paginatedData.length > 0 ? (
  //             paginatedData.map((row, i) => (
  //               <tr key={i}>
  //                 {columns.map((col) => (
  //                   <td key={col.accessor}>{row[col.accessor]}</td>
  //                 ))}
  //               </tr>
  //             ))
  //           ) : (
  //             <tr>
  //               <td colSpan={columns.length} style={{ textAlign: "center" }}>
  //                 No data found
  //               </td>
  //             </tr>
  //           )}
  //         </tbody>
  //       </table>

  //       {/* Pagination Controls */}
  //       <div
  //         style={{
  //           marginTop: "10px",
  //           display: "flex",
  //           gap: "10px",
  //           justifyContent: "center",
  //         }}
  //       >
  //         <button
  //           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
  //           disabled={currentPage === 1}
  //         >
  //           Prev
  //         </button>
  //         <span>
  //           Page {currentPage} of {totalPages}
  //         </span>
  //         <button
  //           onClick={() =>
  //             setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  //           }
  //           disabled={currentPage === totalPages}
  //         >
  //           Next
  //         </button>
  //       </div>
  //     </div>
  //   );

  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Get items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Paginated Items</h3>
      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Pagination controls */}
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableWithPagination;
