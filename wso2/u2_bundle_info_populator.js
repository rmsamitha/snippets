/**
 * This script can be used to add or remove bundles.info file entries via the WSO2 UMT.
 * 
 * Usage:
 *      1. Fill the entries object with the required entries.
 *      2. Copy the contents of this file to the clipboard.
 *      3. Open the WSO2 UMT and go to the required updates "Edit" mode.
 *      4. Open the browser console and paste the contents of this file.
 *      5. Press enter to execute the script.
 */

// Modify the following object appropriately.
var entries = {
    'repository/components/default/configuration/org.eclipse.equinox.simpleconfigurator/bundles.info': {
        add: [
            ['com.google.guava', '31.1.0.jre', '../plugins/com.google.guava_31.1.0.jre.jar']
        ],
        remove: [
            ['com.google.guava', '27.0.0.jre', '../plugins/com.google.guava_27.0.0.jre.jar']
        ]
    },
    'repository/components/control-plane/configuration/org.eclipse.equinox.simpleconfigurator/bundles.info': {
        add: [
            ['com.google.guava', '31.1.0.jre', '../plugins/com.google.guava_31.1.0.jre.jar']
        ],
        remove: [
            ['com.google.guava', '27.0.0.jre', '../plugins/com.google.guava_27.0.0.jre.jar']
        ]
    }
};

for (var [path, obj] of Object.entries(entries)) {
    var add = obj['add'];
    var remove = obj['remove'];

    for (var i = 0; i < add.length; i++) {
        $('#btnBundlesInfoModalOpen').click();
        $('#txtBundlesInfoPath').val(path);
        $('#txtJarName').val(add[i][0]);
        $('#txtJarVersion').val(add[i][1]);
        $('#txtRelativeJarPath').val(add[i][2]);
        $('#cmbChangeType').val('add');
        $('#btnAddBundlesInfo').click();
    }

    for (var i = 0; i < remove.length; i++) {
        $('#btnBundlesInfoModalOpen').click();
        $('#txtBundlesInfoPath').val(path);
        $('#txtJarName').val(remove[i][0]);
        $('#txtJarVersion').val(remove[i][1]);
        $('#txtRelativeJarPath').val(remove[i][2]);
        $('#cmbChangeType').val('remove');
        $('#btnAddBundlesInfo').click();
    }
}