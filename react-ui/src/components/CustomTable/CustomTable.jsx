import styles from './CustomTable.module.css';

const CustomTable = (props: any) => {
  const TableHeaders = {
    API: ['Name', 'Type', 'Default Value', 'Description'],
    CSS: ['Name', 'Description'],
  };

  const _renderTableHeader = () => {
    return TableHeaders[props?.type || 'API'].map(header => {
      return <th className={styles.tableHeader}>{header}</th>;
    });
  };

  const _renderTabledata = () => {
    if (props?.type === 'API') {
      return props?.data?.map(data => {
        return (
          <tr className={styles.tableHeaders}>
            <td className={styles.tableData}>{data.name}</td>
            <td
              className={`${styles.tableData} ${styles.highlightedTableData}`}
            >
              {data.type}
            </td>
            <td className={styles.tableData}>{data.defaultValue}</td>
            <td className={styles.tableData}>{data.description}</td>
          </tr>
        );
      });
    } else {
      return props?.data?.map(data => {
        return (
          <tr className={styles.tableHeaders}>
            <td className={styles.tableData}>{data.name}</td>
            <td className={styles.tableData}>{data.description}</td>
          </tr>
        );
      });
    }
  };

  return (
    <table className={styles.tableWrapper}>
      <thead className={styles.tableHeaders}>{_renderTableHeader()}</thead>
      {_renderTabledata()}
    </table>
  );
};

export default CustomTable;
