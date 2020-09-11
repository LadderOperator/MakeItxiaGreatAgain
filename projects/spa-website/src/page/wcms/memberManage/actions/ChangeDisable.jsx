import { useEffect } from "react";
import { Modal } from "antd";
import { PUT } from "UTIL/api";

/**
 * 改变账号的禁用状态.
 * */
function ChangeDisable({ member, onRefreshData }) {
  useEffect(() => {
    if (!!!member) {
      return;
    }
    let actionName = "禁用";
    if (member.disabled) {
      actionName = "启用";
    }
    Modal.confirm({
      title: "请再次确认",
      content: `确定要${actionName} ${member.realName} 的账号吗？`,
      centered: true,
      cancelText: "取消",
      okText: "确认",
      onOk: async () => {
        try {
          const { code } = await PUT(`/member/${member._id}/disabled`, {
            disabled: !!!member.disabled,
          });
          if (code === 0) {
            Modal.success({
              title: "操作成功",
              content: `已${actionName} ${member.realName} 的账号.`,
              centered: true,
            });
          } else {
            Modal.error({
              title: "操作失败",
              content: "请确认是否有足够权限，或者刷新重试",
              centered: true,
            });
          }
          onRefreshData();
        } catch (e) {}
      },
    });
  }, [member, onRefreshData]);
  return null;
}

export { ChangeDisable };