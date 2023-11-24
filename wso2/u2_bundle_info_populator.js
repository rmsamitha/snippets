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
            ['apache-zookeeper', '3.9.1.wso2v1', '../plugins/apache-zookeeper_3.9.1.wso2v1.jar']
        ],
        remove: [
            ['apache-zookeeper', '3.4.14', '../plugins/org.apache.hadoop.zookeeper_3.4.14.jar']
        ]
    },
    'repository/components/api-devportal/configuration/org.eclipse.equinox.simpleconfigurator/bundles.info': {
        add: [
            ['apache-zookeeper', '3.9.1.wso2v1', '../plugins/apache-zookeeper_3.9.1.wso2v1.jar']
        ],
        remove: [
            ['apache-zookeeper', '3.4.14', '../plugins/org.apache.hadoop.zookeeper_3.4.14.jar']
        ]
    },
    'repository/components/api-key-manager/configuration/org.eclipse.equinox.simpleconfigurator/bundles.info': {
        add: [
            ['apache-zookeeper', '3.9.1.wso2v1', '../plugins/apache-zookeeper_3.9.1.wso2v1.jar']
        ],
        remove: [
            ['apache-zookeeper', '3.4.14', '../plugins/org.apache.hadoop.zookeeper_3.4.14.jar']
        ]
    },
    'repository/components/api-publisher/configuration/org.eclipse.equinox.simpleconfigurator/bundles.info': {
        add: [
            ['apache-zookeeper', '3.9.1.wso2v1', '../plugins/apache-zookeeper_3.9.1.wso2v1.jar']
        ],
        remove: [
            ['apache-zookeeper', '3.4.14', '../plugins/org.apache.hadoop.zookeeper_3.4.14.jar']
        ]
    },
    'repository/components/gateway-worker/configuration/org.eclipse.equinox.simpleconfigurator/bundles.info': {
        add: [
            ['apache-zookeeper', '3.9.1.wso2v1', '../plugins/apache-zookeeper_3.9.1.wso2v1.jar']
        ],
        remove: [
            ['apache-zookeeper', '3.4.14', '../plugins/org.apache.hadoop.zookeeper_3.4.14.jar']
        ]
    },
    'repository/components/traffic-manager/configuration/org.eclipse.equinox.simpleconfigurator/bundles.info': {
        add: [
            ['apache-zookeeper', '3.9.1.wso2v1', '../plugins/apache-zookeeper_3.9.1.wso2v1.jar']
        ],
        remove: [
            ['apache-zookeeper', '3.4.14', '../plugins/org.apache.hadoop.zookeeper_3.4.14.jar']
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
