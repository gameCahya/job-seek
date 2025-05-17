function addAccount(): void {
    const accountNameInput = document.getElementById('newAccountName') as HTMLInputElement;
    const accountName = accountNameInput.value.trim();
    if (!accountName) {
        alert('Nama akun tidak boleh kosong!');
        return;
    }

    const extraAccountsTable = document.getElementById('extraAccounts') as HTMLTableSectionElement;
    const newRow = document.createElement('tr');

    const accountOptions = [
        { value: "loker.engineering", label: "@loker.engineering" },
        { value: "lokerdigitalmarketing", label: "@lokerdigitalmarketing" },
        { value: "loker_mengajar", label: "@loker_mengajar" },
        { value: "lokerjawatengah_official", label: "@lokerjawatengah_official" },
        { value: "loker_akuntansikeuangan", label: "@loker_akuntansikeuangan" },
        { value: "lokerjawatimur_official", label: "@lokerjawatimur_official" },
        { value: "loker_dokterkesehatan", label: "@loker_dokterkesehatan" },
    ];

    const optionsHtml = accountOptions
        .map(
            (option) => `<option value="${option.value}">${option.label}</option>`
        )
        .join("");

    newRow.innerHTML = `
      <td class="border p-2 text-left">
        <input type="checkbox" name="extraAccount" value="${accountName}" />
      </td>
      <td class="border p-2 text-left">${accountName}</td>
      <td class="border p-2 text-left">
        <select>
          ${optionsHtml}
        </select>
      </td>
    `;

    extraAccountsTable.appendChild(newRow);
    accountNameInput.value = ''; // Clear the input field
}

  export default addAccount;